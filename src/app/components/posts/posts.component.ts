import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service'
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  rows: any;
  editing = {};
  isAdd = false;
  userId: Number;
  title: String;
  body: String;
  message: String;
  constructor(private postsService: PostsService) {
    this.rows = [];
    this.postsService.getPosts().subscribe(res => {
      console.log(res);
      this.rows = res;
    },
      err => {
        console.log("some error occured!");
      })
  }
  ngOnInit() {

  }
  updateValue(event, cell, rowIndex) {
    console.log(this.editing[rowIndex + '-title']);
    console.log('inline editing rowIndex', rowIndex)
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
    console.log('UPDATED!', this.rows[rowIndex][cell]);
  }

  editPost(row) {
    console.log(row, "hehe");
    this.editing[row] = true;
  }
  savePost(row) {
    console.log(row, "saved");
    this.editing[row] = false;
  }
  deletePost(row) {
    if (row > -1) {
      this.rows.splice(row, 1);
      this.rows = [...this.rows];
    }
  }
  showAddPost() {
    this.isAdd = true;
  }
  cancelShowPost() {
    this.isAdd = false;
    this.message="";
  }

  addPost() {
    console.log("added a post");
    console.log(this.title);
    if (this.userId && this.title && this.body){
    var obj={
      id: (Math.max.apply(Math, this.rows.map(function(o) { return o.id; }))+1),
      userId:this.userId,
      title:this.title,
      body:this.body,
    }
    this.rows = [obj, ...this.rows];
    this.message="";
    this.isAdd = false;
    this.title="";
    this.body="";
    this.userId=0;
  }
  else {
    this.message="Please enter data in all the fields";
  }

  }



}
