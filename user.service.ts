import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private baseURL = "http://localhost:8081/api/v1/users";
  constructor(private httpClient: HttpClient) { }

  getUsersList():Observable<User[]>{

    return this.httpClient.get<User[]>(`${this.baseURL}`);
  }

  createUser(user:User):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,user);
  }

  getUserByuserId(userId:number):Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL}/${userId}`);
  }

  updateUser(userId:number,user:User):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${userId}`,user);
  }

  deleteUser(userId:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${userId}`);
  }

}
