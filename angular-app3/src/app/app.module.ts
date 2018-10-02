import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './Component/registration-form/registration-form.component';
import { UserInfoService } from './Services/user-info.service';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UserInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
