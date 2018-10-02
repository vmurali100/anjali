import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../../Services/user-info.service';
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
   private user=[];
  constructor(private _us_:UserInfoService) { }

  ngOnInit() {
    this.user=this._us_.getInfo();
    console.log(this.user);
  }

}
