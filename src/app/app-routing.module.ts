import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'About-Me',component:AboutMeComponent},
  {path:'My-Projects',component:MyProjectsComponent},
  {path:'My-Skills',component:MySkillsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
