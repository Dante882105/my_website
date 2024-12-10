import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/main/home/home.component';
import { AboutComponent } from './components/main/about/about.component';
import { ResumeComponent } from './components/main/resume/resume.component';

const routes: Routes = [
  { path: "", redirectTo: "main/home", pathMatch: "full" },
  {path:"main", children:[
    {path:"", redirectTo:"home", pathMatch:"full"},
    {path:"home", component: HomeComponent},
    {path:"about", component:AboutComponent},
    {path:"resume", component: ResumeComponent}
  ], component: MainComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
