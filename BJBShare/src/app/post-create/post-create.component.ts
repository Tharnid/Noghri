import { Component } from '@angular/core';

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {
    enteredValue = '';
    newPost = 'NO CONTENT';

    onAddPost() {
       // alert('Post Added!!!'); 
       // console.dir(postInput);
       this.newPost = this.enteredValue;
       // 'The first post....user\s post!!!';
    }
}