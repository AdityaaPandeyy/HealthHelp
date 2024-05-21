import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DocauthService } from './docauth.service';

@Injectable({
  providedIn: 'root'
})
export class DocAuthGuardService implements CanActivate{

  constructor(private docAuth : DocauthService, private router : Router) { }
  canActivate(){
    if(this.docAuth.isLoggedIn())return true;
    else {
      this.router.navigate(["/doc-login"]);
      return false;
    }
  }
}
