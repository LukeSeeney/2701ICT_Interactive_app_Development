import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.page.html',
  styleUrls: ['./edit-user.page.scss'],
})
export class EditUserPage implements OnInit {
  // user details
  username:string;
  password:string;

  // old password
  oldPassword:string;

  confirmPassword:string;

  // profile picture
  profilePic:any;
  saved:boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit() 
  {
    this.username = this.userService.getUsername();
    this.password = this.userService.getPassword();
    this.oldPassword = this.userService.getPassword();
    this.profilePic = this.userService.getProfilePic();
  }

  changePassword()
  {

  }

  imageSelected(files:any){
    let fileReader = new FileReader();
    fileReader.onload = e => {
      this.profilePic = e.target.result;
    };
    fileReader.readAsDataURL(files[0]);
  }

  saveProfilePic(){
    this.userService.updatePicture(this.profilePic)
    this.saved = true
  }
}
