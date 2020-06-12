import { Component } from '@angular/core';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})

export class PostListComponent {
    // posts = [
    //     { title: 'Post One', content: 'The first Post' },
    //     { title: 'Post Two', content: 'The second Post' },
    //     { title: 'Post Three', content: 'The third Post' },
    // ];

    posts = [];
}