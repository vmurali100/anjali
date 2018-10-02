import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor() { }
  getInfo() {
    return [
        {
        "id": 58464,"email": "VZiegler@sed.org","username": "FChase",
            "password": "iofyg"
        },
        {
            "id": 58465,
            "email": "EShauna@magna.io",
            "username": "THebert",
            "password": "HkDqx"
        },
        {
            "id": 58466,
            "email": "JPitts@dolor.net",
            "username": "SMangat",
            "password": "Hg7rb"
        },
        {
            "id": 58467,
            "email": "CSommers@adipiscing.gov",
            "username": "LWolz",
            "password": "I78mg"
        }
    ];
  }
}

