import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Post }  from './post'

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  loading = false;
  constructor(private http: HttpClient) { }
  
  postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  
  getPosts() {
    this.loading = true;
    this.http.get<Post[]>(this.postsUrl).subscribe((data)=>{
      this.posts = data;
      this.loading = false;
    })
  }

  posts: Post[] = [];
}




