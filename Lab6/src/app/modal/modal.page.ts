import { Component, OnInit } from '@angular/core';
import { NavParams} from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  firstName="";
  lastName="";
  email="";
  editaddbtn = "Edit";

  constructor(private navParams:NavParams,private modalController:ModalController) { }

  ngOnInit() {
   
   
      this.firstName = this.navParams.get('firstName');
      this.lastName = this.navParams.get('lastName');
      this.email = this.navParams.get('email');
      if (this.firstName != "" || this.firstName !=undefined || this.firstName != ""){
        this.editaddbtn = 'Edit';
      }else{
        this.editaddbtn = 'Add';
    }
  }
  closemodal(){
    this.modalController.dismiss({firstName:this.firstName,lastName:this.lastName,email:this.email});
  }
}