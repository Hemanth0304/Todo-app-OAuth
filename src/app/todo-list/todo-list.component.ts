import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

import { Tutorial } from '../models/tutorial.model';
import { OAuthService } from '../oauth.service';
import { TodoServiceService } from '../service/todo-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import { map, of } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  tutorials?: Tutorial[];
  currentTutorial: Tutorial = {};
  currentIndex = -1;
  title = '';

  done:any;
  todo:any;
  username: any;
  token= localStorage.getItem('Token')






  constructor( private active:ActivatedRoute,private serv:OAuthService,private todoservice : TodoServiceService,private router:Router) { }

  ngOnInit(): void {

    
    const data = of('Hemanth');
    data.pipe(map(name =>name.toUpperCase())).subscribe(data => console.log(data));
    
    if(!this.token){

      alert('You are not a Logged In user..... Please Login To Continue')

    }
    this.retrieveTutorials();
    this.retrieveDoneTasks();
    this.serv.getUserDetails(localStorage.getItem('Token')).subscribe({ next: data=>this.username=data["login"], error: err=>{console.log(err)}});
  }


  logout()
{
  localStorage.clear();
  this.serv.logout().subscribe(data=>this.router.navigate(['/login']),err=>{console.log( err)});

}
add(){
  this.router.navigate(['/add'])
}

  retrieveTutorials(): void {
    this.todoservice.getAll()
      .subscribe({
        next: (data) => {
          this.tutorials = data;
          this.todo = data;
         
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  retrieveDoneTasks(): void {
    this.todoservice.getAlldone()
      .subscribe({
        next: (data) => {
          this.done = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }


  refreshList(): void {
    this.retrieveTutorials();
    this.currentTutorial = {};
    this.currentIndex = -1;
  }


  setActiveTutorial(tutorial: Tutorial, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }


  removeAllTutorials(): void {
    this.todoservice.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }


  drop(event: CdkDragDrop<string[]>) {
    

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

      

    } 
    else 
    
    {
      const data = {
        title: this.todo.title,
        description: this.todo.description,
        Status: true
      };
      this.todoservice.update(this.todo.id , data)
      .subscribe({
        next: (res) => {
          console.log(res);
         
     
        },
        error: (e) => console.error(e)
      });

     
     
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      
    }
  }

  



  updatePublished(status: boolean): void {
    const data = {
      title: this.currentTutorial.title,
      description: this.currentTutorial.description,
      Status: status
    };

    this.todoservice.update(this.currentTutorial.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentTutorial.Status = status;
        },
        error: (e) => console.error(e)
      });
      
  }




}


