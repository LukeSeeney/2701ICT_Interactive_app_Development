import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-area',
  templateUrl: './add-area.page.html',
  styleUrls: ['./add-area.page.scss'],
})
export class AddAreaPage implements OnInit { 
  
  constructor(public modalctrl: ModalController) {}  

  ngOnInit() {  
  }  
  close() {  
    
    this.modalctrl.dismiss();  
  }  
}  