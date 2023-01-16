import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderModule} from "./components/header/header.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeModule} from './pages/home/home.module';
import {HttpClientModule} from "@angular/common/http";
import {ContactModule} from "./pages/contact/contact.module";
import {MessageModule} from './pages/message/message.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ContactsModule} from "./pages/contacts/contacts.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderModule,
    BrowserAnimationsModule,
    HomeModule,
    ContactModule,
    MessageModule,
    NgbModule,
    ContactsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
