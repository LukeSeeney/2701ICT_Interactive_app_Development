import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // username / password input
  username:string;
  password:string;

  // user data storage
  userData:any;

  // user storage
  users:any;
  constructor(private storageService:StorageService) { 
    this.storageService.get("users").then((val) => {
      this.users = val;
      // console.log(this.users);
    });
  }

  // record login input
  setLoginInput(username:string, password:string){
    this.username = username;
    this.password = password;
  }

  // verify login input
  verify(){
    for(let user of this.users){
      if(this.username == user.username && this.password == user.password){
        this.userData = user.areas;
        return true;
      }
    } 
    return false;
    
  }
  // send current username
  getUsername(){
    return this.username;
  }
  // send current password
  getPassword(){
    return this.password;
  }
  getUserData(){
    return this.userData;
  }
}
