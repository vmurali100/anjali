import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';


@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  person: any;
  students;

  constructor(private ds:PersonService) { 
 
  }

  ngOnInit() {
    this.students = this.ds.sendData()
  }
  getStudent(std){
    this.ds.getandsend(std)
  }

}
