import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-resume';
  imageUrl: any;
  sideBar: { name: string; }[];
  constructor(private userService:UserService){

  }
  ngOnInit() {
    this.userService.getUser().subscribe(response =>{
      this.imageUrl=response
    })
    this.sideBar = this.userService.getSidebarData();
    console.log(this.sideBar)
  }
}

