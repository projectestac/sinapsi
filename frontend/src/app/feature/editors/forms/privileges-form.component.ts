import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Collection, Model } from 'app/core';
import { User, Privilege, PrivilegeRole } from 'app/models';


@Component({
    selector: 'app-privileges-form',
    templateUrl: 'privileges-form.component.html',
    styleUrls: [ 'privileges-form.component.scss' ]
})
export class PrivilegesFormComponent implements OnInit {

    /** Minimum number of rows on the users table */
    public readonly MIN_ROWS = 12;

    /** Ordered privileges collection */
    public privileges = [];

    /** Privileges control as an array */
    @Input('control') control: FormControl;

    /** User typeahead box */
    @ViewChild('userBox') userBox;


    /**
     * Component initialization.
     */
    ngOnInit() {
        this.updateCollection(this.control.value);

        this.control.valueChanges.subscribe(value => {
            this.updateCollection(value);
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
     * Appends a privilege for the given user to the privileges
     * form array.
     *
     * @param user      User owning the privilege
     */
    public append(user: User) {
        if (!this.findUserPrivilege(user)) {
            this.userBox.clear();

            if (!Array.isArray(this.control.value)) {
                this.control.setValue([]);
            }

            const privilege = {
               user: user,
               role: PrivilegeRole.VIEWER
            };

            this.control.value.push(privilege);
            this.privileges.push(privilege);
            this.sortByUserName(this.privileges);
        }
    }


    /**
     * Remove the privilege for the given user from the privileges
     * form array.
     *
     * @param user      User owning the privilege
     */
    public remove(user: User) {
        const value = this.findUserPrivilege(user);

        if (typeof value === 'object') {
            const values = this.control.value;
            const privileges = this.privileges;

            values.splice(values.indexOf(value), 1);
            privileges.splice(privileges.indexOf(value), 1);
        }
    }


    /**
     * Update the sorted privileges collection.
     *
     * @param values    Privileges array
     */
    public updateCollection(values: any[]) {
        if (Array.isArray(values)) {
            this.privileges = values.filter(v => !!v['user']);
            this.sortByUserName(this.privileges);
        } else {
            this.privileges = [];
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
     * Returns the first privilege on the control value that
     * contains the given user. Values are compared by their ID
     * attribute.
     *
     * @param user      User to search
     * @returns         Privilege object or undefined
     */
    private findUserPrivilege(user: User) {
        if (!Array.isArray(this.control.value)) {
            return undefined;
        }

        return this.control.value.find(privilege => {
            return (user.id === privilege.user.id);
        });
    }


    /**
     * Sorts the given privileges in place by the user name.
     *
     * @param privileges    Privileges array
     * @returns             Sorted privileges
     */
    private sortByUserName(privileges: any[]): any[] {
        return privileges.sort((a, b) => {
            return this.compareNames(a['user'], b['user']);
        });
    }


    /**
     * Compare two user objects by their name.
     *
     * @param a     First user to compare
     * @param b     Second user to compare
     *
     * @returns     Locale comparision value
     */
    private compareNames(a: User, b: User) {
        const an = a && a['name'];
        const bn = b && b['name'];

        if (typeof an === 'string' && typeof bn === 'string') {
            return an.localeCompare(bn);
        }

        return (an === bn) ? 0 : (an < bn) ? -1 : 1;
    }


    /**
     * Returns an empty array with N values.
     */
    public _emptyRows(): any[] {
        const length = this.privileges.length;
        const numRows = Math.max(this.MIN_ROWS - length);
        return Array(numRows).fill(null);
    }

}
