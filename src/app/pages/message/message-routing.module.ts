import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ComposeComponent} from './compose/compose.component';
import {ListComponent} from "./list/list.component";

const routes: Routes = [{
  path: 'messages',
  children: [
    {
      path: 'compose/:id',
      component: ComposeComponent,
    },
    {
      path: 'list',
      component: ListComponent,
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessageRoutingModule { }
