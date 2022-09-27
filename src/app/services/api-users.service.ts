import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import {User} from '../entity/User';

@Injectable({
  providedIn: 'root'
})
export class ApiUsersService {
    private  _jsonUrl = 'assets/List-users.json';
  constructor(private httpClient: HttpClient ) {
    this.getUsers()
  }

  getUsers() : Observable<User[]>  {
  return this.httpClient.get<User[]>(`${this._jsonUrl}`)
}

  updateUser( user: User): Observable<User>{

    return this.httpClient.post<User>(`${this._jsonUrl}`, user);


  }



}
