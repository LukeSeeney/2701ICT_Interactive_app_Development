import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
usernameInp:string = ""
passwordInp:string = ""
users = [{username: "asd", password: "asd"},{username:"luke", password:"1234"}]
  constructor() { }

setUserDetails(username, password){
  for (let i in this.users){
    if (this.users[i].username == username && this.users[i].password == password) 
    {
      this.usernameInp = username;
      this.passwordInp = password;
      return
    }
    else
    {
      this.usernameInp = "";
      this.passwordInp = "";
    }
  }
}
getUsername(){
  console.log(this.usernameInp)
  return this.usernameInp;
}
getPassword(){
  return this.passwordInp;
}
}
