import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';
import { } from 'rxjs/add/operator/toPromise';
import { Repo } from '../app/class/repo'; 

@Injectable({
  providedIn: 'root'
})
export class RepoService { 
repo: Repo;
username:string;

  constructor(private http:HttpClient) {
   this.repo =new Repo(1,"","",new Date,"")
  }


  
  updateUser(username){
    this.username = username;
    this.repoRequest()
  }

  repoRequest(){
    interface ApiResponse {
         id:number; 
         name:string; 
         description:string;
         published_at:Date;
         html_url:string; 
    }
  
  let promise = new Promise((resolve, reject) => { 
    this.http.get<ApiResponse>(environment.apiURL+this.username +"/repos"+environment.apiKey).toPromise()
      .then((response) =>{
        console.log(response);
        this.repo.name = response.name
        this.repo.description = response.description
        this.repo.date = response.published_at
        this.repo.live = response.html_url                    
        resolve(this.repo)      
      },
      error=>{
        console.log("error")

        reject(error)
      })
  })
  return promise
  }  
}
