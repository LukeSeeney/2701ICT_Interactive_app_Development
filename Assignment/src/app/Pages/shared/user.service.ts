import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  username:string;
  password:string;

  users = [{username:"asd", password:"asd"}, {username:"admin", password:"admin"}];
  constructor() { }

  setLoginInput(username, password){
    this.username = username;
    this.password = password;
  }

  verify(){
    for(let user of this.users){
      if(this.username == user.username && this.password == user.password){
        return true
      }
    } 
    return false
    
  }
  getUsername(){
    return this.username
  }

  getPassword(){
    return this.password
  }

}
