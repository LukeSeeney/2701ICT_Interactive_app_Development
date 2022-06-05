import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
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

  // user scheduling storage
  schedule:any

  // user storage
  users:any;

  private userDataSub = new Subject<any>();
  ob = this.userDataSub.asObservable();

  updateHomeUserData(value:any) {
    this.userDataSub.next(value);
  }

  constructor(private storageService:StorageService) { 
    this.storageService.get("users").then((val) => {
      this.users = val;
      // console.log(this.users)
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
        this.schedule = user.schedule;
        return true;
      }
    } 
    return false;
  }

  // update areas in user accountand storage
  updateUser(areaStorage:any){
    for(let user of this.users){
      if(this.username == user.username && this.password == user.password){
        user.areas = areaStorage;
        this.userData = user.areas;
      }
    }
    this.storageService.store("users", this.users)
  }

  // update scheduling in user account and storage
  updateSchedule(schedule:any){
    for(let user of this.users){
      if(this.username == user.username && this.password == user.password){
        this.users.schedule = schedule;
      }
    }
    this.storageService.store("users", this.users)
  }

  // send current username
  getUsername(){
    return this.username;
  }

  // send current password
  getPassword(){
    return this.password;
  }

  // send current user's data
  getUserData(){
    return this.userData;
  }
  
}
