import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FetchService } from '../fetch.service';

@Component({
  selector: 'app-analyse',
  templateUrl: './analyse.component.html',
  styleUrls: ['./analyse.component.css']
})
export class AnalyseComponent implements OnInit {
  response:any;
  keys:any;
  constructor(private http: HttpClient) { 
    this.getOpn();
  }

  ngOnInit() {
  }
  getOpn(){
    this.http.get("http://127.0.0.1:5000/analyse?pid="+FetchService.pid).subscribe((response)=>{
      this.response=response;
      console.log(this.response);
      console.log("analysis completed");
      this.keys=Object.keys(this.response);
    })
  }
}
