import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scrap',
  templateUrl: './scrap.component.html',
  styleUrls: ['./scrap.component.css']
})
export class ScrapComponent implements OnInit {
  response:any;

  constructor(private http: HttpClient,private router: Router) { 
  this.scrapReview();
  }

  ngOnInit() {
  }
  scrapReview(){
    this.http.get("http://127.0.0.1:5000/scrap?pid="+FetchService.pid).subscribe((response)=>{
      this.response=response;
      console.log(this.response)
      console.log("done")
    })
  }
  analyse(){
    this.router.navigate(['analyse']);
  }
}
