import { Component } from '@angular/core';
import { DocauthService } from '../docauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doc-login',
  templateUrl: './doc-login.component.html',
  styleUrl: './doc-login.component.css'
})
export class DocLoginComponent {
  username:string='';
  password:string='';
  invalidLogin=false;

  constructor(private docAuth : DocauthService, private router : Router){}

  checkLogin(){
    if(this.docAuth.authenticate(this.username, this.password)){
      this.router.navigate(["/docdash"]);
      this.invalidLogin = false;
    }
    else{
      alert("Wrong credentials");
      this.router.navigate(["/home"]);
      this.invalidLogin = true;
    }
  }
}
