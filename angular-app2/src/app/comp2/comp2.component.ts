import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  personInfo: any;

  constructor(private ds:PersonService) { }

  ngOnInit() {
    this.ds.sendInfo.subscribe(r=>{
      this.personInfo = r;
    })
  }

}
