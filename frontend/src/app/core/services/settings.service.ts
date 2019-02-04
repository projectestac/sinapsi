import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    constructor(private http: HttpClient) {
        Object.assign(this.values, environment);
    }


    /**
     * Initializes the settings service fetching any environment
     * parameters from the server and returning a promise that is
     * resolved whenever the initialization completes.
     */
    initialize(): Promise<boolean> {
        return new Promise(resolve => {
            this.http.get('environment.json', {})
                .finally(() => resolve(true))
                .subscribe(e => Object.assign(this.values, e));
        });
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
