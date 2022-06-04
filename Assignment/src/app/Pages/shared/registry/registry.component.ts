import { Component, Input, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { Area } from 'src/app/light';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.scss'],
})
export class RegistryComponent implements OnInit {

  @Input() loginType: boolean;

  constructor(private userservice: UserService, private router: Router, private route: ActivatedRoute, private storageService: StorageService) { }

  // username and password inputs
  username:string;
  password:string;

  // login attempt counter
  loginAttempts:number = 0;
  usernameTaken:boolean = false;
  invalidUsername:boolean = false;
  invalidPassword:boolean = false;

  // set login input and navigate to home page if verified by user service
   login()
   {
    this.loginAttempts++;
    this.userservice.setLoginInput(this.username, this.password)
    if(this.userservice.verify()){
      
      this.router.navigate(['home'])
    }
    return this.loginAttempts
   }

    // navigate to registry page
    register()
    {
      this.router.navigate(["create-user"])
    }

    
    newUser()
    {
      if(this.checkDetails())
      {
        this.userservice.users.push({username:this.username, password:this.password, areas:[new Area("Home")], schedule:[]})
        console.log(this.userservice.users)
        this.storageService.store("users", this.userservice.users)
        this.router.navigate(["login"])
      }
    }

    checkDetails()
    {
      for(let user of this.userservice.users)
      {
        if(this.username == user.username){
          this.usernameTaken = true;
        }else{
          this.usernameTaken = false;
        }
        console.log(this.usernameTaken)
      }if(this.username == "" || this.username == null){
        this.invalidUsername = true;
      }else{
        this.invalidUsername = false;
      }if(this.password == "" || this.password == null){
        this.invalidPassword = true;
      }else{
        this.invalidPassword = false;
      }if(this.invalidUsername == false && this.invalidPassword == false && this.usernameTaken == false){
        return true;
      }else{
        return false;
      }
    }

    cancel()
    {
      this.router.navigate(["login"])
    }

  ngOnInit() {}

}
