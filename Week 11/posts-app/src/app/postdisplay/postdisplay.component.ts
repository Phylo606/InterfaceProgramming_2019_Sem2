import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-postdisplay',
  templateUrl: './postdisplay.component.html',
  styleUrls: ['./postdisplay.component.css']
  
})
export class PostdisplayComponent implements OnInit {

  constructor(public postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getPosts()
  }

  postReload() {
    this.postsService.posts = [];
    this.postsService.getPosts()
  }
}
