import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './account/register/register.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExtUrlResolverService } from './ext-url-resolver.service';
import { GitAuthComponent } from './git-auth/git-auth.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NoSuchComponent } from './no-such/no-such.component';
import { RedirectComponent } from './redirect/redirect.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { UnsavedFormGuard } from './unsaved-form.guard';
// import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [ 

//Lazy Loading Path 
{ path:'todos', loadChildren:()=> import('./todo-list/todo-list.module').then(m=>m.TodoListModule), 
canActivate:[AuthGuard]

},
{ path:'todo/:id', component: TodoDetailsComponent},

{ path:'add',  canDeactivate:[UnsavedFormGuard],component: AddTodoComponent},


{ path: '', component:LoginComponent},

{ path: 'register', component:RegisterComponent},


{
  path:"login",
  pathMatch:"full",
  redirectTo:'login'
},
{
  path:'dashboard',
  component:DashboardComponent
},
{
  path:'login',
  component:LoginComponent
},
{
  path: 'test',
  component: GitAuthComponent,
  resolve: {
      url: ExtUrlResolverService
  }
},
{
path:'redirect',
component:RedirectComponent
},
{
path:'**',
component:NoSuchComponent
},






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
