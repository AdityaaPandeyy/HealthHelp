import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AdServiceService } from './ad-service.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate{

  constructor(private adminService : AdServiceService, private router : Router) { }
  canActivate() {
    if(this.adminService.isLoggedIn())return true;
    else{
      this.router.navigate(["/ad-login"]);
      return false;
    }
  }
}
