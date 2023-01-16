import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";



@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
  ]
})
export class ListModule { }
