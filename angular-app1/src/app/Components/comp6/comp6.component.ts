import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comp6',
  templateUrl: './comp6.component.html',
  styleUrls: ['./comp6.component.css']
})
export class Comp6Component implements OnInit {

  @Output() sendData = new EventEmitter
  statement = "I am Child Compoent And I am coming the Child"
  constructor() { }

  ngOnInit() {
    console.log(this.sendData)
  }
  sendInfo(){
    this.sendData.emit(this.statement)
  }
}
