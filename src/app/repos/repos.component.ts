import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { RepoService } from '../../services/repo.service';
import { Repo } from '../class/repo'; 

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
 repo:Repo;

  constructor(public repoService: RepoService) {
  
  }
  
  
  ngOnInit() {
    this.repoService.repoRequest()
    this.repo=this.repoService.repo
  }
}
