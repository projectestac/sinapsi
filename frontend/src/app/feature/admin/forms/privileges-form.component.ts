import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Collection, Model } from 'app/core';
import { User, Privilege, PrivilegeRole } from 'app/models';


@Component({
    selector: 'app-privileges-form',
    templateUrl: 'privileges-form.component.html',
    styleUrls: [
        'admin-form.component.scss',
        'privileges-form.component.scss'
    ]
})
export class PrivilegesFormComponent implements OnInit {

    /** Minimum number of rows on the users table */
    private readonly MIN_ROWS = 12;

    /** Ordered privileges collection */
    public privileges: Collection<Privilege>;

    /** Privileges form groups */
    public formArray: FormArray;
    
    /** Form for this component */
    @Input('formGroup') form: FormGroup;

    /** User typeahead box */
    @ViewChild('userBox') userBox;


    /**
     * Component initialization.
     */
    ngOnInit() {
        this.formArray = <FormArray> this.form.get('privileges');

        this.form.valueChanges.subscribe(form => {
            this.privileges = this.formArray.value
                .filter(v => v['user'] !== null)
                .sort((a, b) => a.user.name.localeCompare(b.user.name));
        });
    }


    /**
     * Returns if a privilege grants management rights.
     *
     * @param privilege     Privilege object to check
     * @returns             If the privilege role is 'manager'
     */
    public isManager(privilege: Privilege): boolean {
        return (privilege.role === PrivilegeRole.MANAGER);
    }


    /**
     * Returns if a privilege grants edition rights.
     *
     * @param privilege     Privilege object to check
     * @returns             If the privilege role is 'manager' or 'editor'
     */
    public isEditor(privilege: Privilege): boolean {
        return (
            privilege.role === PrivilegeRole.EDITOR ||
            this.isManager(privilege)
        );
    }


    /**
     * Returns an empty array with N values.
     */
    public _emptyRows(): any[] {
        const length = this.privileges.length;
        const numRows = Math.max(this.MIN_ROWS - length);
        return Array(numRows).fill(null);
    }


    /**
     * Appends a privilege for the given user to the privileges
     * form array.
     *
     * @param user      User owning the privilege
     */
    public append(user: User) {
        // Ignore users that already own a privilege

        if (this.findUserGroup(user)) {
            return;
        }

        // Append the user to the first empty group on
        // the privileges form array

        const group = this.findEmptyGroup();

        if (typeof group === 'object') {
            group.setValue({
               id: null,
               user: user,
               role: PrivilegeRole.VIEWER
            });

            this.userBox.clear();
        }
    }


    /**
     * Remove the privilege for the given user from the privileges
     * form array.
     *
     * @param user      User owning the privilege
     */
    public remove(user: User) {
        const group = this.findUserGroup(user);

        if (typeof group === 'object') {
            group.reset();
        }
    }


    /**
     * Toggle the manager role for the given privilege object.
     *
     * @param privilege     Privilege object
     */
    public toggleManagerRole(privilege: Privilege) {
        privilege.role = (this.isManager(privilege)) ?
            PrivilegeRole.EDITOR :
            PrivilegeRole.MANAGER;
    }


    /**
     * Toggle the editor role for the given privilege object.
     *
     * @param privilege     Privilege object
     */
    public toggleEditorRole(privilege: Privilege) {
        privilege.role = (this.isEditor(privilege)) ?
            PrivilegeRole.VIEWER :
            PrivilegeRole.EDITOR;
    }


    /**
     * Returns the first form group on the privileges
     * form controls that contains the given user.
     *
     * @param user      User to search
     * @returns         Form group object or undefined
     */
    private findUserGroup(user: User) {
        return this.formArray.controls.find((group) => {
            const value = group.get('user').value;
            return (value && user.id === value.id);
        });
    }


    /**
     * Returns the first empty form group on the privileges
     * form controls
     *
     * @returns         Form group object or undefined
     */
    private findEmptyGroup() {
        return this.formArray.controls.find((group) => {
            return !group.get('user').value;
        });
    }
}
