import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {from, Observable} from 'rxjs';
import {User} from '../entity/User';
//import SampleJson from  '../../assets/List-users.json';
@Injectable({
  providedIn: 'root'
})
export class ApiUsersService {
    private  _jsonUrl = 'assets/List-users.json';
  constructor(private httpClient: HttpClient ) {
    console.log('Reading local json files');
   // console.log(SampleJson);
    this.getUsers()
  }

  getUsers() : Observable<User[]>  {
  return this.httpClient.get<User[]>(`${this._jsonUrl}`)
}


}
