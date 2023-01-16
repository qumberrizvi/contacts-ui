import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list.component';
import {HomeRoutingModule} from "../../pages/home/home-routing.module";
import {ServicesModule} from "../../services/services.module";
import {MatListModule} from "@angular/material/list";
import {ContactItemModule} from "../contact-item/contact-item.module";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";



@NgModule({
  declarations: [
    ContactListComponent
  ],
  exports: [
    ContactListComponent
  ],
  imports: [
    CommonModule,
    ServicesModule,
    HomeRoutingModule,
    MatListModule,
    ContactItemModule,
    MatProgressSpinnerModule,
  ],
})
export class ContactListModule { }
