import { Component, OnInit,Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-comp8',
  templateUrl: './comp8.component.html',
  styleUrls: ['./comp8.component.css']
})
export class Comp8Component implements OnInit {
@Output() send = new EventEmitter;
senddata="I am coming from child class";
 constructor() { }

  ngOnInit() {
  }
 sendData()
 {
  this.send.emit(this.senddata);
 }
}
