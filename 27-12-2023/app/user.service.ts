import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users/');
  }
  getUserById(userId:number){
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
  }

  creatUser(user:user){
     return this.http.post();
  }
}
