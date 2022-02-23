import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListRoutingModule } from './todo-list-routing.module';

console.warn('TODO LIST LOADED NOW')
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TodoListRoutingModule
  ]
})


export class TodoListModule { }
