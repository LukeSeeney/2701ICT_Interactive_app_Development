import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // username / password input
  username:string;
  password:string;

  // user storage
  users = [{username:"asd", password:"asd"}, {username:"admin", password:"admin"}];
  constructor() { }

  // record login input
  setLoginInput(username:string, password:string){
    this.username = username;
    this.password = password;
  }

  // verify login input
  verify(){
    for(let user of this.users){
      if(this.username == user.username && this.password == user.password){
        return true
      }
    } 
    return false
    
  }
  // send current username
  getUsername(){
    return this.username
  }
  // send current password
  getPassword(){
    return this.password
  }

}
