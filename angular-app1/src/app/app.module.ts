import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnjaliComponent } from './Components/anjali/anjali.component';
import { Comp1Component } from './Components/comp1/comp1.component';
import { Comp2Component } from './Components/comp2/comp2.component';
import { Comp3Component } from './Components/comp3/comp3.component';
import { Comp4Component } from './Components/comp4/comp4.component';
import { Comp5Component } from './Components/comp5/comp5.component';
import { Comp6Component } from './Components/comp6/comp6.component';
<<<<<<< HEAD
import { Comp7Component } from './Components/comp7/comp7.component';
import { Comp8Component } from './Components/comp8/comp8.component';
import { StuChildComponent } from './Components/stu-child/stu-child.component';
import { StuParentComponent } from './Components/stu-parent/stu-parent.component';
=======
import { ParentComponent } from './Components/parent/parent.component';
import { ChildComponent } from './Components/child/child.component';
>>>>>>> 6716c43c043a1aafd61f3d9b210d112905c544e4

@NgModule({
  declarations: [
    AppComponent,
    AnjaliComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    Comp5Component,
    Comp6Component,
<<<<<<< HEAD
    Comp7Component,
    Comp8Component,
    StuChildComponent,
    StuParentComponent
=======
    ParentComponent,
    ChildComponent
>>>>>>> 6716c43c043a1aafd61f3d9b210d112905c544e4
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]// Application starting Component
})
export class AppModule { }
