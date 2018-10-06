import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class PersonService {
 sendInfo = new Subject<any>();
  url: string;
  constructor(private _http:HttpClient) { }

  getandsend(std){
    
  }

  sendData(){
  
  }
  
  getRemoteData(){
    this.url = "http://www.filltext.com/?rows=5&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true"
    this._http.get(this.url).subscribe(response=>{
      console.log(response)
    })
  }
  
}
