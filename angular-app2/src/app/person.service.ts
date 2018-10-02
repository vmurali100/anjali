import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()

export class PersonService {
 sendInfo = new Subject<any>();
  constructor() { }

  getandsend(std){
    console.log(std)
    this.sendInfo.next(std)
  }

  sendData(){
    return [
      {
          "fname": "Kehinde",
          "lname": "Ingle",
          "tel": "(324)285-3323",
          "address": "6556 Id Rd",
          "city": "Swansea",
          "state": "HI",
          "zip": 55931
      },
      {
          "fname": "Russell",
          "lname": "Crumbliss",
          "tel": "(532)036-1010",
          "address": "8200 Placerat St",
          "city": "Pacific Palisades",
          "state": "TN",
          "zip": 25972
      }
    
  ]
  }
  
}
