import { Component, OnInit } from '@angular/core';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private serv:ServService) { }

  ngOnInit(): void {
  }
  showName(){
    this.serv.loginServ().subscribe((data:any)=> {
      console.log(data)
    })
  }
}
