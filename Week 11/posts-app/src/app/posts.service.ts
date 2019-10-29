import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Post }  from './post'

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }
  
  postsUrl = 'https://jsonplaceholder.typicode.com/posts(https://jsonplaceholder.typicode.com/posts)';
  
  getPosts() {
    return this.http.get(this.postsUrl)
  }

  posts: [Post];
}




