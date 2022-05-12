import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  username:string;
  password:string;

  getUsername() {
    return this.username;
  }

  getPassword() {
    return this.password;
  }


  setDetails(username:string, password:string) {
    this.username = username;
    this.password = password;
    console.log(this.username)
  }
}
