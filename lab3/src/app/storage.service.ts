import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular'

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(public storage:Storage) {  }

  async store(storageKey:string, value:any){
    return await this.storage.set(storageKey, value)
  }
  
  async get(storageKey:string){
    return new Promise(resolve => {
      this.storage.get(storageKey).then((value) => {
        if(value == false){
          resolve(false);
        }else{
          resolve((value))
        }
      })
    })
  }

  async removeItem(storageKey:string){
    await this.storage.remove(storageKey);
  }

  async clear(){
    await this.storage.clear();
  }

  async emptySettings(){
    await this.storage.set("settings",{name:"", showNotif:true, reminder:new Date().toISOString()})
  }
}
