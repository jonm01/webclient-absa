import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  static pid:String;
  constructor(private router: Router) { }
  
  getPID(url){
    let regex = RegExp("https://www.amazon.com/([\\w-]+/)?(dp|gp/product)/(\\w+/)?(\\w{10})");
    let m = url.match(regex);
    if (m) {
      FetchService.pid=m[4];
      console.log(FetchService.pid);
      this.router.navigate(['scrap']);
    }
    else{
      alert("Please Check the Url");
    }
  }
}
