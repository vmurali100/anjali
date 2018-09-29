import { Component, OnInit, Input } from '@angular/core';

//Component is A Decorator
@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  @Input() received;
  constructor() { }

  ngOnInit() {
  }

}
