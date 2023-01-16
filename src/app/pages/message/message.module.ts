import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageRoutingModule } from './message-routing.module';
import { ComposeModule } from './compose/compose.module';
import {ServicesModule} from '../../services/services.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ServicesModule,
    MessageRoutingModule,
    ComposeModule
  ]
})
export class MessageModule { }
