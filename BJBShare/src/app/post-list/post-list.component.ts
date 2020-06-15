import { Component, Input } from '@angular/core';

import { Post } from '../post.model';
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

    @Input() posts: Post[] = [];
}