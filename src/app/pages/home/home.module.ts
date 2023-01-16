import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {ContactListModule} from "../../components/contact-list/contact-list.module";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ContactListModule,
  ]
})
export class HomeModule { }
