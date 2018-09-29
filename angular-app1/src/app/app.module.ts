import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnjaliComponent } from './Components/anjali/anjali.component';
import { Comp1Component } from './Components/comp1/comp1.component';
import { Comp2Component } from './Components/comp2/comp2.component';

@NgModule({
  declarations: [
    AppComponent,
    AnjaliComponent,
    Comp1Component,
    Comp2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]// Application starting Component
})
export class AppModule { }
