import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Injectable, OnDestroy } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RequestOptionsArgs } from '@angular/http';
import { URLSearchParams, QueryEncoder } from '@angular/http';

import {
    ModelCreated,
    ModelDeleted,
    ModelRestored,
    ModelUpdated,
    RetrieveError,
    UpdateError,
    StoreEvent
} from './store.events';


/** Response payload */
export type StoreResponse = (
    StoreSucces |
    StoreError
);


/**
 * Represents a success response.
 */
export interface StoreSucces {
    id: number;
}


/**
 * Represents an error response.
 */
export interface StoreError {
    status: number;
    message: string;
    errors?: Object;
}


/**
 * Represents a collection query.
 */
export interface StoreQuery {
    limit?: number,
    page?: number,
    search?: string,
    sort?: Array<string>,
    with?: Array<string>,
    [filters: string]: any
}


/**
 * Represents a simple model.
 */
export interface Model {
    id: number;
}


/**
 * Extends an array object with pagination metadata.
 */
export class Collection<T> extends Array<T> {
    total = 0;
    per_page = 0;
    current_page = 0;
    last_page = 0;
    from = 0;
    to = 0;
    path = null;
}


/**
 * Data mapper for a JSON REST API.
 */
@Injectable()
export class StoreService implements OnDestroy {

    /** Authentication subject */
    private subject = new Subject<StoreEvent>();

    /** Observable of queries */
    public events = this.subject.asObservable();


    /**
     * Service constructor.
     *
     * @param http          Http service
     */
    constructor(private http: Http) {}


    /**
     * Service destructor.
     */
    ngOnDestroy() {
        this.subject.complete();
    }


    /**
     * Obtain a collection of objects.
     *
     * @param path          Resource path
     * @param params        Search filters
     *
     * @return              Observable
     */
    query(path: string, params?: Object): Observable<Collection<Model>> {
        const options = { params: toURLSearchParams(params) };
        const request = Object.assign({}, options.params);

        return this.http.get(path, options)
            .catch(response => this.throw(
                new RetrieveError(path, request, response.json())))
            .map(response => toCollection<Model>(response));
    }


    /**
     * Obtain a single object.
     *
     * @param path          Resource path
     * @param id            Object identifier
     *
     * @return              Observable
     */
    get(path: string, id: number): Observable<StoreResponse> {
        const request = { id: id };

        return this.http.get(`${path}/${id}`)
            .catch(response => this.throw(
                new RetrieveError(path, request, response.json())))
            .map(response => response.json());
    }


    /**
     * Delete a single object.
     *
     * @param path          Resource path
     * @param id            Object identifier
     *
     * @return              Observable
     */
    delete(path: string, id: number): Observable<StoreResponse> {
        const request = { id: id };

        return this.http.delete(`${path}/${id}`)
            .catch(response => this.throw(
                new UpdateError(path, request, response.json())))
            .map(response => this.emit(
                new ModelDeleted(path, request, response.json())));
    }


    /**
     * Restore a single deleted object.
     *
     * @param path          Resource path
     * @param id            Object identifier
     *
     * @return              Observable
     */
    restore(path: string, id: number): Observable<StoreResponse> {
        const request = { id: id };

        return this.http.post(`${path}/${id}`, {})
            .catch(response => this.throw(
                new UpdateError(path, request, response.json())))
            .map(response => this.emit(
                new ModelRestored(path, request, response.json())));
    }


    /**
     * Update a single object.
     *
     * @param path          Resource path
     * @param id            Object identifier
     * @param params        Object properties to update
     *
     * @return              Observable
     */
    update(path: string, id: number, params: Object): Observable<StoreResponse> {
        const options = { params: toURLSearchParams(params) };
        const request = Object.assign({ id: id }, options.params);

        return this.http.put(`${path}/${id}`, null, options)
            .catch(response => this.throw(
                new UpdateError(path, request, response.json())))
            .map(response => this.emit(
                new ModelUpdated(path, request, response.json())));
    }


    /**
     * Store a new object.
     *
     * @param path          Resource path
     * @param params        Object properties to store
     *
     * @return              Observable
     */
    create(path: string, params: Object): Observable<StoreResponse> {
        const request = Object.assign({}, params);

        return this.http.post(path, params)
            .catch(response => this.throw(
                new UpdateError(path, request, response.json())))
            .map(response => this.emit(
                new ModelCreated(path, request, response.json())));
    }


    /**
     * Batch process multiple requests.
     *
     * @param path          Resource path
     * @param params        Batch requests
     *
     * @returns             Observable
     */
    batch(path: string, params: Object): Observable<any> {
        return this.create(path, params);
    }


    /**
     * Throws a storage error event and throws a new observable
     * with the error response.
     */
    private throw(event: StoreEvent): Observable<any> {
        this.subject.next(event);
        return Observable.throw(event.response);
    }


    /**
     * Emits a storage success event and returns the success response.
     */
    private emit(event: StoreEvent): any {
        this.subject.next(event);
        return event.response;
    }

}


/**
 * Encodes a string value into a URL compatible form. This method uses
 * the ```encodeURIComponent``` method to encode the provided value and
 * then unescapes some special characters.
 *
 * @param value                 Value to encode
 * @return                      Encoded value
 */
function encodeURL(value: string): string {
    return encodeURIComponent(value)
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/g, '$')
        .replace(/%2C/gi, ',')
        .replace(/%3B/gi, ';')
        .replace(/%20/g, '+');
}


/**
 * Serialize a plain value. This method transforms booleans, numbers and
 * date objects into strings. If a complex object is passed as a parameter,
 * the object is converted to its JSON representation.
 *
 * @param value                 Value to serializeValue
 * @return string               Serialized representation
 */
function serializeValue(value: any): string {
    if (typeof value === 'boolean') {
        return value ? '1' : '0';
    }

    if (value instanceof Date) {
        return value.toISOString();
    }

    if (typeof value === 'object') {
        return JSON.stringify(value);
    }

    return value;
}


/**
 * Serialize an object into a query string. The returned string is a
 * jQuery-like representation of the object. {@see jQuery.param()}
 *
 * @param object                Object to serialize
 * @return                      Serialized representation
 */
function serializeObject(object: any): string {
    const parts: string[] = [];

    if (object === undefined) {
        return null;
    }

    Object.keys(object).forEach(function(key) {
        const value: any = object[key];
        const param: string = encodeURL(key);

        if (value === undefined) {
            return;
        }

        if (Array.isArray(value)) {
            value.forEach(function(item) {
                const v: string = serializeValue(item);
                parts.push(`${param}[]=${encodeURL(v)}`);
            });
        } else if (value !== null) {
            const v: string = serializeValue(value);
            parts.push(`${param}=${encodeURL(v)}`);
        } else {
            parts.push(`${param}=`);
        }
    });

    return parts.join('&');
}


/**
 * Serializes an object and returns a suitable URLSearchParams
 * object with the raw parameters.
 *
 * @param params    Parameters to serialize
 * @returns         URLSearchParams object
 */
function toURLSearchParams(params: any): URLSearchParams {
    const serialized = serializeObject(params);

    return new URLSearchParams(serialized,
        new class extends QueryEncoder {
            encodeValue(v) { return v; }
            encodeKey(v) { return v; }
        }
    );
}


/**
 * Transforms an Http response into a collection-like object.
 *
 * @param response              Response object
 * @return                      A new collection object
 */
function toCollection<T>(response: Response): Collection<T> {
    const object: Object = response.json();
    const data: Collection<T> = object['data'];

    Object.keys(object).forEach(function(key) {
        if (key !== 'data') {
            data[key] = object[key];
        }
    });

    return data;
}
