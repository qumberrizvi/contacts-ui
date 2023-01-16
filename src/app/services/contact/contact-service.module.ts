import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactService} from "./contact.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [ContactService]
})
export class ContactServiceModule { }
