import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-config-side-bar',
  templateUrl: './config-side-bar.component.html',
  styleUrls: ['./config-side-bar.component.css']
})
export class ConfigSideBarComponent implements OnInit {

  constructor() { }
  @Input() userCard ;

  ngOnInit(): void {


  }


}
