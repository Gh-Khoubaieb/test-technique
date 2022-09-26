import {Component, Input, OnInit, Output} from '@angular/core';
import {User} from '../entity/User';
import {ApiUsersService} from '../services/api-users.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  constructor(private  apiUserService: User) { }
  @Input() user   ;
  //@Output() userCard = this.user ;
  val: string = '';
  ngOnInit(): void {
    console.log('user', this.user)
  }

  save( user) {
    this.apiUserService.nombre_enfantss(100) ;


    console.log("this.apiUserService.nombre_enfants",  this.apiUserService.nombre_enfantss)
    console.log("dtata  usss",  user._nombre_enfants)
  }
}
