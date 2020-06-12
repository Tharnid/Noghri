import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {
    enteredTitle = '';
    enteredContent = '';
    @Output() postCreated = new EventEmitter();


    onAddPost() {
       // alert('Post Added!!!'); 
       // console.dir(postInput);
       // this.newPost = this.enteredValue;
       // 'The first post....user\s post!!!';

       const post = { 

        title: this.enteredTitle, 
        content: this.enteredContent 
        };
       this.postCreated.emit(post);
    }
}