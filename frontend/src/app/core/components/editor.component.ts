import { throwError, Observable, Subject, ReplaySubject } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractControl, FormGroup } from '@angular/forms';
import { CnDialog } from 'concrete/dialog';
import { CnToaster } from 'concrete/toaster';
import { Comparator } from 'app/core/services';
import { StoreService } from 'app/core/services';
import { PoliciesService } from 'app/core/auth';
import { SessionService, UserChanged } from 'app/core/auth';
import { ScrollTop } from 'app/core/core.decorators';

import { FetchState } from './components.types';
import { EditorMessages } from './editor.messages';


/**
 * Abstract editor component.
 */
@Component({
    template: '@EditorComponent'
})
export /*abstract*/ class EditorComponent implements OnDestroy, OnInit {

    /** Form being edited */
    public form: FormGroup = null;

    /** Models being edited */
    public models: object = null;

    /** Default value of the form */
    public defaults: object = null;

    /** Last received error */
    public error: object = null;

    /** Current state */
    public state: FetchState = FetchState.PENDING;

    /** Component states subject */
    private _states = new ReplaySubject<FetchState>(1);

    /** Unsubscribe subject */
    protected unsubscribe = new Subject();


    /**
     * Component constructor.
     */
    constructor(
        protected dialog: CnDialog,
        protected policies: PoliciesService,
        protected route: ActivatedRoute,
        protected session: SessionService,
        protected store: StoreService,
        protected toaster: CnToaster
    ) {}


    /**
     * Component initialization.
     */
    ngOnInit() {
        // Initialize the form and the related data

        this.form = this.createForm();
        this.defaults = this.clone(this.form.value);
        this.models = this.clone(this.form.value);

        // Update the component state on changes

        this.states
            .takeUntil(this.unsubscribe)
            .subscribe(state => this.state = state);

        // Refresh the page when the URL changes

        this.route.params
            .takeUntil(this.unsubscribe)
            .subscribe(params => this.edit(params.id));

        // Refresh when the logged in user changes

        this.session.events
            .takeUntil(this.unsubscribe)
            .filter(e => e instanceof UserChanged)
            .subscribe(e => this.edit(this.route.snapshot.params.id));
    }


    /**
     * Component destructor.
     */
    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }


    /**
     * Observable of state changes.
     */
    get states(): Subject<FetchState> {
        return this._states;
    }


    /**
     * Initialize the editor for an object.
     *
     * @param id        Unique ID of the object
     */
    @ScrollTop()
    public edit(id: number) {
        this.clear();
        this.refresh(id);
    }


    /**
     * Reset the form to its initial values.
     */
    @ScrollTop()
    public reset() {
        this.form.reset(this.clone(this.defaults));
        this.form.patchValue(this.clone(this.models));
        this.form.markAsPristine();
    }


    /**
     * Shows a confirmation dialog that asks the user to confirm
     * a form reset. Resets the form if confirmed by the user.
     */
    public confirmReset() {
        this.dialog.open(EditorMessages.ResetConfirm())
            .filter(event => event.confirmed)
            .subscribe(event => this.reset());
    }


    /**
     * Shows a confirmation dialog that asks the user to confirm
     * the navigation with unsaved changes.
     *
     * @returns         An observable with the user response
     */
    public canDeactivate(): Observable<boolean> | boolean {
        if (this.state === FetchState.READY) {
            if (Comparator.differ(this.form.value, this.models)) {
                const confirm = EditorMessages.DeactivateConfirm();
                return this.dialog.open(confirm).map(e => e.confirmed);
            }
        }

        return true;
    }


    /**
     * Returns if the current form can be saved.
     *
     * @returns         If the form is valid
     */
    public validate(): boolean {
        return this.form.valid;
    }


    /**
     * Save the current form data and refresh the models.
     */
    public save() {
        const error = EditorMessages.ValidationError();
        const success = EditorMessages.SaveSuccess();

        // Check that the form is valid

        if (this.validate() === false) {
            this.touch(this.form);
            this.toaster.error(error);
            return;
        }

        // Call the save method with the form changes

        this.states.next(FetchState.PENDING);

        const changes = Comparator.changes(
            this.form.value, this.models);

        this.updateModels(changes)
            .catch(errors => {
                this.states.next(FetchState.READY);
                return throwError(errors);
            })
            .subscribe(response => {
                this.refresh(this.route.snapshot.params.id);
                this.toaster.success(success);
            });
    }


    /**
     * Refresh the editor data. This method fetches new data from
     * the backend and updates the component state.
     *
     * @param id        Unique object identifier
     */
    protected refresh(id: number) {
        this.states.next(FetchState.PENDING);

        this.fetchModels(id)
            .catch(error => {
                this.error = error;
                this.states.next(error.status === 404 ?
                    FetchState.EMPTY : FetchState.ERROR);
                return throwError(error);
            })
            .subscribe(models => {
                this.patch(models);
                this.states.next(FetchState.READY);
            });
    }


    /**
     * Set the current models and patch the form with them.
     *
     * @param models    Models for the form
     */
    protected patch(models: any) {
        this.models = this.assign(models, this.defaults);
        this.form.reset(this.clone(this.defaults));
        this.form.patchValue(this.clone(this.models));
    }


    /**
     * Reset the forms to its default values.
     */
    protected clear() {
        this.form.reset(this.clone(this.defaults));
    }


    /**
     * Returns a deep copy of a JSON object.
     *
     * @param object    JSON object to clone
     * @returns         A new object
     */
    protected clone(object: any): any {
        return JSON.parse(JSON.stringify(object));
    }


    /**
     * Recursively mark all the controls as touched.
     */
    protected touch(control: AbstractControl) {
        control.markAsTouched();

        if ('controls' in control) {
            Object.values(control['controls'])
                  .forEach((c: AbstractControl) => {
                      this.touch(c);
                  });
        }
    }


    /**
     * Returns the given models after replaciong each missing value
     * by a clone of the default value. This creates a data structure
     * that matches that of the current form.
     *
     * @param models        Models object
     * @param defaults      Form defaults
     *
     * @returns             Models object with defaults
     */
    private assign(models: any, defaults: any): any {
        if (models === undefined) {
            return this.clone(defaults);
        }

        if (models === null && defaults !== null) {
            return this.clone(defaults);
        }

        if (Comparator.typeOf(defaults) === 'object') {
            Object.entries(defaults).forEach(([key, value]) => {
                models[key] = this.assign(models[key], value);
            });
        }

        return models;
    }


    /**
     * Returns a new form to use for the editor.
     *
     * @returns         New form group
     */
    /*abstract*/ createForm(): FormGroup {
        throw new Error('Not implemented');
    }


    /**
     * Fetch the editable models from the backend.
     *
     * @param id        Object identifier
     * @returns         Observable with the models
     */
    /*abstract*/ fetchModels(id: number): Observable<any> {
        throw new Error('Not implemented');
    }


    /**
     * Update the models on the backend.
     *
     * @param form      Form values that have changed
     * @returns         Observable with the response
     */
    /*abstract*/ updateModels(changes: any): Observable<any> {
        throw new Error('Not implemented');
    }

}
