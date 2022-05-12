import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  firstName:string;
  lastName:string;
  email:string;
  contacts = [{firstName:'Allan',lastName:'Browning',email:'a.browning@cqu.edu.au'},
  {firstName:'Allan2',lastName:'Browning2',email:'a.browning2@cqu.edu.au'},
  {firstName:'Allan3',lastName:'Browning3',email:'a.browning3@cqu.edu.au'},
  {firstName:'Allan4',lastName:'Browning4',email:'a.browning4@cqu.edu.au'}]
  
  
  constructor(private modalController: ModalController){}
  
  async addContact(){
   
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: { }
    });
  
    modal.onDidDismiss()
      .then((retval) => {
        if (retval.data !== undefined){
          this.contacts.push(retval.data)
        }
   });
     return modal.present();
  }
  delete(i:number){
   
    this.contacts.splice(i,1);
  }
  
  async edit(i:number)
  {
    const editmodal = await this.modalController.create(
      {
      component: ModalPage,
      componentProps: 
        { 
        firstName: this.contacts[i].firstName,
        lastName:this.contacts[i].lastName, 
        email:this.contacts[i].email,
        }
      });
  
    editmodal.onDidDismiss()
    .then((retval) => 
    {
        this.contacts[i].firstName = retval.data.firstName;
        this.contacts[i].lastName = retval.data.lastName;
        this.contacts[i].email = retval.data.email;
    });
     return editmodal.present();
  }

}
