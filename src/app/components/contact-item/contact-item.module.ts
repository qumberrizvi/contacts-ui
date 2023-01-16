import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactItemComponent } from './contact-item.component';
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    ContactItemComponent
  ],
  exports: [
    ContactItemComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    RouterLink
  ]
})
export class ContactItemModule { }
