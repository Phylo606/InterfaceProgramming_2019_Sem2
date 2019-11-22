import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersloading = false;
  constructor(private http: HttpClient) { }

  usersUrl = 'https://jsonplaceholder.typicode.com/users';

  getUsers() {
    this.usersloading = true;
    this.http.get<User[]>(this.usersUrl).subscribe((data)=>{
      this.users = data;
      this.usersloading = false;
    })
  }

  users: User[] = [];
}
