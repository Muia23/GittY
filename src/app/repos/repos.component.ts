import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  repos:any; 

  constructor(private userService: UserService) {
    this.userService.getUserRepo().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    })

  }

  ngOnInit(): void {
  }

}
