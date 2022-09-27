import {Component, Input, OnInit} from '@angular/core';
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

  @Input() userCard ;
  ngOnInit(): void {

  }
  constructor(private apiUserService: ApiUsersService) {
  }
  /*
  * @ToDo
  * */
  LoadListUsersFromJson(){
    return this.apiUserService.getUsers().subscribe( data =>{
      this.listUsers = data ;
    })
  }

  /*
  * @ToDo
  * */
  SaveListUsersInJson(){
    this.apiUserService.updateUser(this.userCard).subscribe(data =>{

    this.listUsers.push( data);


  })
  }

}
