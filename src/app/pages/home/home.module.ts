import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {MainMenuModule} from "../../components/main-menu/main-menu.module";


@NgModule({
  declarations: [
    HomeComponent
  ],
    imports: [
        CommonModule,
        MainMenuModule,
    ]
})
export class HomeModule { }
