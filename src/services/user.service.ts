import { Injectable, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { environment } from '../environments/environment';
import { } from 'rxjs/add/operator/toPromise';
import { User } from '../app/class/user';

 

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;
  username:string;

  constructor(private http:HttpClient){
    this.user =new User("","","","","","","","","","",);
  }

 updateUser(username){
    this.username = username;
    this.userRequest()
  }

  userRequest(){
    interface ApiResponse {
      login:string;
      avatar_url:string;
      followers:string;
      following:string;
      name:string;
      public_gists:string;
      public_repos:string;
      html_url:string;      
      bio:string;
      email:string;
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(environment.apiURL+this.username+environment.apiKey).toPromise()
          .then((response)=>{          
            console.log(response);                    
            this.user.username = response.login          
            this.user.avatar = response.avatar_url
            this.user.followers = response.followers
            this.user.following = response.following  
            this.user.name = response.name
            this.user.gists = response.public_gists
            this.user.repos = response.public_repos
            this.user.githublink = response.html_url
            this.user.bio = response.bio
            this.user.email = response.email
            resolve(this.user)
          },
          error=>{
            this.user.username = "Oops! Try Again.."
            this.user.avatar = "https://media2.giphy.com/media/du3J3cXyzhj75IOgvA/giphy.mp4";
            reject(error)
          })
        })
        return promise
  }

}
    