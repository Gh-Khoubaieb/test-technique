import {Component, Input, OnInit, Output} from '@angular/core';
import {User} from '../entity/User';
import {ApiUsersService} from '../services/api-users.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  constructor() { }
  @Input() user   ;
  //@Output() userCard = this.user ;
  ngOnInit(): void {
    console.log('user', this.user)
  }

}
