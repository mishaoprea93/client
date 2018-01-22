import { Component, OnInit } from '@angular/core';
import {MainService} from './../main.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:object
  constructor(private _mainService:MainService,private _router:Router) { 
   
  }


  login(){
    this._mainService.login(this.user,(data)=>{
      console.log(data);
      if(data){
        this._router.navigate(['/home']);
      }
    })
  }
  ngOnInit() {
  }

}
