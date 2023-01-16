import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ComposeComponent} from './compose/compose.component';

const routes: Routes = [{
  path: 'message',
  children: [
    {
      path: 'compose/:id',
      component: ComposeComponent,
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessageRoutingModule { }
