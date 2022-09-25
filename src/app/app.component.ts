import {Component, OnInit} from '@angular/core';
import {User} from './entity/User';
import {HttpClient} from '@angular/common/http';
import {ApiUsersService} from './services/api-users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'test-technique';
  listUsers:User[]=[];
  showFiller = false;

  ngOnInit(): void {
    //this.LoadListUsersFromJson();
  }
  constructor(private apiUserService: ApiUsersService) {
  }
  /*
  * @ToDo
  * */
  LoadListUsersFromJson(){
    return this.apiUserService.getUsers().subscribe( data =>{
      console.log('users data', data);
      this.listUsers = data ;
    })
  }

  /*
  * @ToDo
  * */
  SaveListUsersInJson(){}

}
