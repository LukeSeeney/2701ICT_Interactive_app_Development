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

  // user scheduling storage
  schedule:any

  // user power consumprion storage
  powerData:any

  // user storage
  users:any;
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
        this.powerData = user.powerData;
        return true;
      }
    } 
    return false;
  }

  updateUser(areaStorage:any){
    for(let user of this.users){
      if(this.username == user.username && this.password == user.password){
        user.areas = areaStorage;
      }
    }
    this.storageService.store("users", this.users)
  }

  updateSchedule(schedule:any){
    for(let user of this.users){
      if(this.username == user.username && this.password == user.password){
        this.users.schedule = schedule;
      }
    }
    this.storageService.store("users", this.users)
  }

  updatePower(){
    
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

  // send current user's power consumption
  getPowerData(){
    return this.powerData;
  }
  
}
