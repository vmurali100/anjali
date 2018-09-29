import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  myName:String="Murali";

  sendData:string="I am Coming from parent"
  constructor() { }

  ngOnInit() {
  }

}
