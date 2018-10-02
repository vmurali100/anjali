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
import { ParentComponent } from './Components/parent/parent.component';
import { ChildComponent } from './Components/child/child.component';

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
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]// Application starting Component
})
export class AppModule { }
