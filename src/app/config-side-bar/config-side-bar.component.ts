import {Component, Input, OnInit} from '@angular/core';
import {UserCardComponent} from '../user-card/user-card.component';
import {ApiUsersService} from '../services/api-users.service';

@Component({
  selector: 'app-config-side-bar',
  templateUrl: './config-side-bar.component.html',
  styleUrls: ['./config-side-bar.component.css']
})
export class ConfigSideBarComponent implements OnInit {
 // @Input() userCard: UserCardComponent
  constructor() { }
  @Input() userCard ;
val;
  ngOnInit(): void {


    console.log("tjis", this.userCard)
  }

}
