import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  students= allStudents;

  @Output() sendinfo = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  getStudent(student){
    console.log(this.sendinfo)
    this.sendinfo.emit(student)
  }
  deleteStudent(i){
    this.students.splice(i,1)
  }
}


const allStudents = [
  {
      "fname": "Gail",
      "lname": "Mitchell",
      "tel": "(393)267-7984",
      "address": "4230 Eros Ct",
      "city": "Rawlins",
      "state": "DC",
      "zip": 11188
  },
  {
      "fname": "Segun",
      "lname": "Burgin",
      "tel": "(402)635-7832",
      "address": "5705 Dui Ln",
      "city": "Wrentham",
      "state": "TX",
      "zip": 91905
  },
  {
      "fname": "Catherine",
      "lname": "Guilfoyle",
      "tel": "(344)293-0700",
      "address": "3285 Curabitur Ct",
      "city": "Warsaw",
      "state": "SC",
      "zip": 93491
  },
  {
      "fname": "Rupa",
      "lname": "Suchland",
      "tel": "(666)244-7106",
      "address": "249 Tortor Ave",
      "city": "Boston",
      "state": "ID",
      "zip": 87713
  },
  {
      "fname": "Gina",
      "lname": "Turner",
      "tel": "(618)328-4119",
      "address": "7294 Amet Rd",
      "city": "Hartford",
      "state": "OH",
      "zip": 81063
  },
  {
      "fname": "Arlyne",
      "lname": "Rossi",
      "tel": "(976)990-8035",
      "address": "8451 Velit Ave",
      "city": "Larimore",
      "state": "NY",
      "zip": 60733
  },
  {
      "fname": "Jack",
      "lname": "Peltonen",
      "tel": "(634)891-2364",
      "address": "2556 Sit Ave",
      "city": "Fort Campbell",
      "state": "WV",
      "zip": 98156
  },
  {
      "fname": "Vanita",
      "lname": "Basol",
      "tel": "(499)857-6325",
      "address": "1968 Orci Ct",
      "city": "Marin",
      "state": "SC",
      "zip": 23873
  },
  {
      "fname": "Nudret",
      "lname": "Haag",
      "tel": "(203)193-0926",
      "address": "102 Tortor Dr",
      "city": "Wabash",
      "state": "AL",
      "zip": 27719
  },
  {
      "fname": "Alisa",
      "lname": "Carey",
      "tel": "(755)289-8426",
      "address": "7720 Massa Ave",
      "city": "Sun Prairie",
      "state": "NJ",
      "zip": 76898
  }
]
