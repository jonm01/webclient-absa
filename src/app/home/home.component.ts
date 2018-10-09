import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  url:string="";

  constructor(private svc:FetchService) { }

  ngOnInit() {
  }

  getUrl(){
    this.svc.getPID(this.url);
  }

}
