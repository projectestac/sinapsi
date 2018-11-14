
/** Component states */
export const enum FetchState {
    PENDING = 'pending',   // Currently fetching results
    EMPTY   = 'empty',     // No results were found
    READY   = 'ready',     // Results succesfully retrieved
    ERROR   = 'error'      // Could not retrive results
}
