import { Component } from '@angular/core';
import { AdServiceService } from '../ad-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ad-login',
  templateUrl: './ad-login.component.html',
  styleUrl: './ad-login.component.css'
})
export class AdLoginComponent {
  username:string='';
  password:string='';
  invalidLogin=false;

  constructor(private adAuth : AdServiceService, private router : Router){}

  checkLogin(){
    if(this.adAuth.authenticate(this.username, this.password)){
      this.router.navigate(["/admin"]);
      this.invalidLogin = false;
    }
    else{
      alert("Wrong credentials");
      this.router.navigate(["/home"]);
      this.invalidLogin = true;
    }
  }
}
