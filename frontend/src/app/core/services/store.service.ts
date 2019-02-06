import { Observable, throwError } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpParameterCodec } from '@angular/common/http';
import { SettingsService } from './settings.service';

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

    /** Base HREF of the backend API */
    private baseHref: string;

    /** Observable of queries */
    public events = this.subject.asObservable();


    /**
     * Service constructor.
     */
    constructor(
        private http: HttpClient,
        settings: SettingsService
    ) {
        const url = settings.get('api_url');
        this.baseHref = (url == null) ? '' : url;
    }


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
        const options = { params: toHttpParams(params) };
        const request = Object.assign({}, options.params);
        const url = this.proxy(path);

        return this.http.get(url, options)
            .catch(response => this.throw(
                new RetrieveError(path, request, response)))
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
        const url = this.proxy(`${path}/${id}`);

        return this.http.get(url)
            .catch(response => this.throw(
                new RetrieveError(path, request, response)));
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
        const url = this.proxy(`${path}/${id}`);

        return this.http.delete(url)
            .catch(response => this.throw(
                new UpdateError(path, request, response)))
            .map(response => this.emit(
                new ModelDeleted(path, request, response)));
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
        const url = this.proxy(`${path}/${id}`);

        return this.http.post(url, {})
            .catch(response => this.throw(
                new UpdateError(path, request, response)))
            .map(response => this.emit(
                new ModelRestored(path, request, response)));
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
        const options = { params: toHttpParams(params) };
        const request = Object.assign({ id: id }, options.params);
        const url = this.proxy(`${path}/${id}`);

        return this.http.put(url, null, options)
            .catch(response => this.throw(
                new UpdateError(path, request, response)))
            .map(response => this.emit(
                new ModelUpdated(path, request, response)));
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
        const url = this.proxy(path);

        return this.http.post(url, params)
            .catch(response => this.throw(
                new UpdateError(path, request, response)))
            .map(response => this.emit(
                new ModelCreated(path, request, response)));
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
        const url = this.proxy(path);
        return this.create(url, params);
    }


    /**
     * Returns a proxied path to the backend API. That is, prefixes
     * the given path with the base HREF defined on the environment
     * variable api_url.
     *
     * @param path          Path to proxy
     * @return              Prefixed path
     */
    private proxy(path: string): string {
        return `${this.baseHref}${path}`;
    }


    /**
     * Throws a storage error event and throws a new observable
     * with the error response.
     */
    private throw(event: StoreEvent): Observable<any> {
        this.subject.next(event);
        return throwError(event.response);
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

        if (Array.isArray(value) && value.length > 0) {
            value.forEach(function(item) {
                const v: string = serializeValue(item);
                parts.push(`${param}[]=${encodeURL(v)}`);
            });
        } else if (Array.isArray(value)) {
            parts.push(`${param}[]=`);
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
 * Serializes an object and returns a suitable HttpParams
 * object with the raw parameters.
 *
 * @param params    Parameters to serialize
 * @returns         HttpParams object
 */
function toHttpParams(params: any): HttpParams {
    return new HttpParams({
        fromString: serializeObject(params),
        encoder: new class implements HttpParameterCodec {
            encodeKey(v) { return v; }
            decodeKey(k) { return k; }
            encodeValue(v) { return v; }
            decodeValue(v) { return v; }
        }
    });
}


/**
 * Transforms an Http response into a collection-like object.
 *
 * @param response              Response object
 * @return                      A new collection object
 */
function toCollection<T>(response: any): Collection<T> {
    const data: Collection<T> = response['data'];

    Object.keys(response).forEach(function(key) {
        if (key !== 'data') {
            data[key] = response[key];
        }
    });

    return data;
}
