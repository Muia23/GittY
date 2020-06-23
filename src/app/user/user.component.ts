import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AppComponent } from '../app.component';
import { HttpClient } from '@angular/common/http';
import { User } from '../class/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;

  constructor(private userService: UserService) {
    
  } 

  ngOnInit() {
    this.userService.userRequest()
    this.user = this.userService.user
  }
}
