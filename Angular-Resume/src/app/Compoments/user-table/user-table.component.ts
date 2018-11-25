import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  users: Object;

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getAllUser().subscribe(response=>{
      this.users=response;
      console.log(this.users)
    })
  }

}
