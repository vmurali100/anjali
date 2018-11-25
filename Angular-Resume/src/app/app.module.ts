import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './Compoments/about/about.component';
import { ExperienceComponent } from './Compoments/experience/experience.component';
import { EducationComponent } from './Compoments/education/education.component';
import { SkillsComponent } from './Compoments/skills/skills.component';
import { InterestsComponent } from './Compoments/interests/interests.component';
import { HttpClientModule} from '@angular/common/http';
import { UserTableComponent } from './Compoments/user-table/user-table.component'
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    InterestsComponent,
    UserTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
