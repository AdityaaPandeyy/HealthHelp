import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocauthService {

  constructor() { }

  authenticate(username : string, password : string){
    if(username == "zaemon" && password == "zaemon@123"){
      sessionStorage.setItem('username',username);
      return true;
    }
    else{
      return false;
    }
  }

  isLoggedIn(){
    let user = sessionStorage.getItem("username");
    console.log(user);
    return user != null;
  }

  logout(){
    console.log("logout");
    sessionStorage.removeItem("username");
  }
}
