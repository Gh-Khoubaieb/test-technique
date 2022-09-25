import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserCardComponent} from './user-card/user-card.component';
import {ConfigSideBarComponent} from './config-side-bar/config-side-bar.component';

const routes: Routes = [

  {path: 'user-card', component:UserCardComponent},
  {path: 'user-config', component:ConfigSideBarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
