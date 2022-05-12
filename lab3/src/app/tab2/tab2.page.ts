import { Component,OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  constructor(private router: Router, private route: ActivatedRoute) {}

  username = "";
  password = "";
  loginObservable:any

  loginAttempts:number = 0;

   login()
   {
    
    this.loginAttempts++;
    this.router.navigate(['account'])
   }
 
   ngOnInit(){
    this.loginObservable = new Observable<object>((observer) => {
      
      observer.next({username:this.username, password:this.password})

    });
   }
}
