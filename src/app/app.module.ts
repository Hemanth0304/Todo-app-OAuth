import { NgModule , ErrorHandler} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { GitAuthComponent } from './git-auth/git-auth.component';
import { RedirectComponent } from './redirect/redirect.component';
import { ErrorComponent } from './error/error.component';
import { ErrorHandlingInterceptorService } from './error-handling-interceptor.service';
import { NoSuchComponent } from './no-such/no-such.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { UnsavedFormGuard } from './unsaved-form.guard';
import { DaysPipe } from './Pipes/days.pipe';
import { DoneComponentComponent } from './component/done-component/done-component.component';
import { CatComponent } from './dynamic-component/cat/cat.component';
import { DogComponent } from './dynamic-component/dog/dog.component';
import { MemberItemComponent } from './dynamic-component/member-item/member-item.component';
import { MemberListComponent } from './dynamic-component/member-list/member-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    TodoDetailsComponent,
    TodoListComponent,  DashboardComponent,
    LoginComponent,
    GitAuthComponent,
    RedirectComponent,
    ErrorComponent,
    NoSuchComponent,
    HomeComponent,
    DaysPipe,
    DoneComponentComponent,
    CatComponent,
    DogComponent,
    MemberItemComponent,
    MemberListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DragDropModule
  
  ],
  providers: [{provide:HTTP_INTERCEPTORS,
    useClass:ErrorHandlingInterceptorService,
    multi:true},AuthGuard, UnsavedFormGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
