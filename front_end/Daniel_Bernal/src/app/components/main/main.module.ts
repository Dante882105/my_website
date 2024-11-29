import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from 'src/app/app-routing.module';

import { BrowserModule } from '@angular/platform-browser';

import { MainComponent } from './main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';



@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ResumeComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
  ],
  exports:[
    NavbarComponent,
  ]
})
export class MainModule { }
