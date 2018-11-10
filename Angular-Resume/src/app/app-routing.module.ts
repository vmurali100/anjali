import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './Compoments/about/about.component';
import { EducationComponent } from './Compoments/education/education.component';
import { ExperienceComponent } from './Compoments/experience/experience.component';
import { InterestsComponent } from './Compoments/interests/interests.component';
import { SkillsComponent } from './Compoments/skills/skills.component';

const routes: Routes = [
  {path:'',component:AboutComponent},
  {path:'education',component:EducationComponent},
  {path:'experience',component:ExperienceComponent},
  {path:'interest',component:InterestsComponent},
  {path:'skills',component:SkillsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
