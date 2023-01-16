import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactService} from './contact/contact.service';
import {MessageService} from './message/message.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [ContactService, MessageService],
})
export class ServicesModule {
}
