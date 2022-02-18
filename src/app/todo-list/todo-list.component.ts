import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Tutorial } from '../models/tutorial.model';
import { TodoServiceService } from '../service/todo-service.service';

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





  constructor( private todoservice : TodoServiceService) { }

  ngOnInit(): void {
    this.retrieveTutorials();
    this.retrieveDoneTasks();
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


  // searchTitle(): void {
  //   this.currentTutorial = {};
  //   this.currentIndex = -1;

  //   this.todoservice.findByTitle(this.title)
  //     .subscribe({
  //       next: (data) => {
  //         this.tutorials = data;
  //         console.log(data);
  //       },
  //       error: (e) => console.error(e)
  //     });
  // }

}


