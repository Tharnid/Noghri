import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  newPost = 'NO CONTENT';
  enteredValue = '';
  constructor() { }

  ngOnInit() {
  }

  onAddPost(postInput: HTMLTextAreaElement) {
    // alert('Post added!!!');
    // this.newPost = 'The user\'s post!!!';
    // console.dir(postInput);
    // this.newPost = postInput.value;
    this.newPost = this.enteredValue;
  }

}
