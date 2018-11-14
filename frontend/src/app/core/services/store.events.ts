/**
 * Base store event.
 */
export class StoreEvent {
    constructor(
        public path: string,
        public request: any,
        public response: any
    ) {}
}


/**
 * Error event base class.
 */
export class StoreErrorEvent extends StoreEvent {}


/**
 * Success event base class.
 */
export class StoreSuccessEvent extends StoreEvent {}


/**
 * Model was successfully created.
 */
export class ModelCreated extends StoreSuccessEvent {}


/**
 * Model was successfully updated.
 */
export class ModelUpdated extends StoreSuccessEvent {}


/**
 * Model was successfully restored.
 */
export class ModelRestored extends StoreSuccessEvent {}


/**
 * Model was successfully deleted.
 */
export class ModelDeleted extends StoreSuccessEvent {}


/**
 * An error happened while retrieving data.
 */
export class RetrieveError extends StoreErrorEvent {}


/**
 * An error happened while retrieving data.
 */
export class UpdateError extends StoreErrorEvent {}

