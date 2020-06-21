import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user:any;
  repos:any; 

  constructor(private userService: UserService) {
    this.userService.getUserData().subscribe(user => {
        console.log(user);
        this.user = user;
    });
    this.userService.getUserRepo().subscribe(repos => {
        console.log(repos);
        this.repos = repos;
    })
  
  } 

  ngOnInit(): void {
  }

}
