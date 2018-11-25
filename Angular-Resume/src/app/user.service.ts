import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }

  getUser(){
    return this._http.get("https://randomuser.me/api/")
  }
  getAllUser(){
    const url = "http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true"
    return this._http.get(url)
  }
  getSidebarData(){
    return sideBarData;
  }
}

const sideBarData=[
  {name:"About"},
  {name:"Experience"},
  {name:"Education"},
  {name:"Skills"},
  {name:"Interests"},
  {name:"Awards"},
  {name:"Awards1"},
  {name:"Awards2"},
]