import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { RepoService } from '../services/repo.service';

  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'GittY';
  username:string;
  
  constructor(private userService:UserService, private repoService:RepoService){
    this.userService;
  } 
  
  findUser(){
    this.userService.updateUser(this.username);
    this.repoService.updateUser(this.username);
  }
  
  

  
  

  
  /*user:any;
  repos:any; 
  username:string;
  

  constructor(private userService: UserService) {
    
  } 

  findUser(){
    this.userService.updateUser(this.username);
    this.userService.getUserData().subscribe(user => {
      console.log(user);
      this.user = user;
  });
  this.userService.getUserRepo().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
  })*/
}
