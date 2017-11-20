import 'rxjs/add/observable/of';
import { Injectable } from '@angular/core';
import { Router, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CnStore } from "concrete/core";
import { Author } from 'app/models';


@Injectable()
export class AuthorsResolver implements Resolve<Author> {
    
    /**
     * Service constructor.
     */
    constructor(
        private router: Router,
        private store: CnStore
    ) {}
    
    
    /**
     * Resolve the author and redirect to the appropiate route
     * based on the author type.
     */
    resolve(route, state): Observable<Author> {
        let id = route.paramMap.get('id');
        let params = { id: id, limit: 1, with: ['synapse'] };
        
        return this.store.query('api/authors', params)
            .map(collection => {
                if (collection.length <= 0) {
                    this.router.navigate(['/404']);
                    return null;
                }
                
                let author = <Author> collection[0];
                
                this.router.navigate([
                    author.type,
                    author.synapse.slug
                ]);
                
                return author;
            })
            .catch(error => {
                this.router.navigate(['/', error.status]);
                return Observable.of(null);
            });
    }

}
