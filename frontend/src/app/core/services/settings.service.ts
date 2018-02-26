import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';


/**
 * Settings service.
 */
 @Injectable()
export class SettingsService {

    /** Settings values object */
    private values: Object = {};


    /**
     * Service constructor.
     */
    constructor() {
        Object.assign(this.values, environment);
    }


    /**
     * Retrieves a configuration value. If the setting is not found
     * returns the provided default value or undefined.
     *
     * @param string key        Setting to retrieve
     * @param any value         (optional) Default value
     *
     * @return any              Setting value
     */
    get(key: string, value: any = undefined): any {
        return this.values[key] || value;
    }


    /**
     * Sets a configuration value.
     *
     * @param string} key       Setting key to store
     * @param any value         Value for the setting
     */
    set(key: string, value: any) {
        this.values[key] = value;
    }

}
