import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './Compoments/about/about.component';
import { EducationComponent } from './Compoments/education/education.component';
import { ExperienceComponent } from './Compoments/experience/experience.component';
import { InterestsComponent } from './Compoments/interests/interests.component';
import { SkillsComponent } from './Compoments/skills/skills.component';
import { UserTableComponent } from './Compoments/user-table/user-table.component';

const routes: Routes = [
  {path:'',component:AboutComponent},
  {path:'Education',component:EducationComponent},
  {path:'Experience',component:ExperienceComponent},
  {path:'Interest',component:InterestsComponent},
  {path:'Skills',component:SkillsComponent},
  {path:'Awards',component:UserTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
