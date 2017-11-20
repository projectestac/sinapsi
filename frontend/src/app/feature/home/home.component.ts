import { Component } from '@angular/core';


import { Post } from 'app/models';
import { CnManager } from 'concrete/core';
import { CnStore } from 'concrete/core';
import { CnToaster } from 'concrete/toaster';


@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: [ 'home.component.scss' ]
})
export class HomeComponent {
    
    public posts: CnManager<Post>;
    
    public view: any = 'default';
    
    
    constructor(
        private store: CnStore,
        private toaster: CnToaster
    ) {
        //this.posts = new CnManager<Post>(
        //    'http://sinapsi.joansala.com/api/posts', store, toaster);
        
        //console.log(this.posts.collection);
        
        //this.posts.fetch({ with: ['author', 'tags'], sort: ['-published_at'] }).catch(() => null);
    }
    
    onSearch(value: string) {
        console.log(value);
    }

}
