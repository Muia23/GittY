import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private username:string;
  private apikey:string;
  
  constructor(private http:HttpClient) { 
    console.log("service is ready!");
    this.username='muia23';
    this.apikey='aec24ccb4434c857d8600e85ce8ab37794292593';
  }

  getUserData(){
    return this.http.get("https://api.github.com/users/" + this.username + "?" + this.apikey +".json");
  }

}
