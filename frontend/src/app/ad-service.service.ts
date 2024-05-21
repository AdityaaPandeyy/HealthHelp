import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdServiceService {

  constructor() { }

  authenticate(username2 : string, password : string){
    if(username2 == "zaemon" && password == "zaemon@123"){
      sessionStorage.setItem("username2",username2);
      return true;
    }
    else{
      return false;
    }
  }

  isLoggedIn(){
    let user = sessionStorage.getItem("username2");
    console.log(user);
    return user != null;
  }

  logout(){
    console.log("logout");
    sessionStorage.removeItem("username2");
  }
}
