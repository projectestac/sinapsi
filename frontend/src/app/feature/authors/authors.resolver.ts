import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { StoreService } from 'app/core';
import { Author } from 'app/models';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class AuthorsResolver implements Resolve<Author> {

    /**
     * Service constructor.
     */
    constructor(
        private router: Router,
        private store: StoreService
    ) { }


    /**
     * Resolve the author and redirect to the appropiate route
     * based on the author type.
     */
    resolve(route, state): Observable<Author> {
        const id = route.paramMap.get('id');
        const params = { id: id, limit: 1, with: ['synapse'] };

        return this.store.query('/api/authors', params)
            .pipe(map(collection => {
                if (collection.length <= 0) {
                    this.router.navigate(['/404']);
                    return null;
                }

                const author = <Author>collection[0];

                this.router.navigate([
                    author.type,
                    author.synapse.slug
                ]);

                return author;
            }))
            .catch(error => {
                this.router.navigate(['/', error.status]);
                return of(null);
            });
    }

}
