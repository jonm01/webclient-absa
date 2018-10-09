import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ScrapComponent } from './scrap/scrap.component';
import { AnalyseComponent } from './analyse/analyse.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FetchService } from './fetch.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ScrapComponent,
    AnalyseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [FetchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
