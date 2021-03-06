import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

import { Task } from '../models/Task.model';
import { OAuthService } from '../oauth.service';
import { TodoServiceService } from '../service/todo-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import { BehaviorSubject, from, map, of, Subject, take, tap } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  tasks?: Task[];
  currentTask: Task = {};
  currentIndex = -1;
  title = '';

  done:any;
  todo:any;
  username: any;
  avatar_url: any;
  token = localStorage.getItem('JWT')






  constructor( private active:ActivatedRoute,private serv:OAuthService,private todoservice : TodoServiceService,private router:Router) { }

  ngOnInit(): void {

    Subject 
     const subject = new Subject();

     subject.subscribe( d => console.log(`Subject Subscriber1 : ${d}`));

     subject.next(2020);

     subject.subscribe( d => console.log(`Subject Subscriber2 : ${d}`)); 


   
     const bSubject = new BehaviorSubject<number>(12);
     bSubject.subscribe(d => console.log(`BehaviorSubject Subscriber1:  ${d}`));

    bSubject.next(200);

    bSubject.subscribe(d => console.log(`BehaviorSubject Subscriber2:  ${d}`));



    from([20,15,10,5])

    .pipe(

      tap(item => console.log(`emitted item... ${item}`)),

       map(item =>item*2),

       map(item =>item-10),

       map(item =>{

         if(item === 0){

         throw new Error('Zero detected');

       }

        return item;

      }),

       take(3)

    )

    .subscribe(

      item=>console.log(`resulting item...${item}`),

      err=>console.log(`error occured ${err}`),

      ()=>console.log('completed')

    )


    

    
    const data = of('Hemanth');
    data.pipe(map(name =>name.toUpperCase())).subscribe(data => console.log(data));
    
    if(!this.token){

      alert('You are not a Logged In user..... Please Login To Continue')

    }
    this.retrieveTutorials();
    this.retrieveDoneTasks();
    // this.serv.getUserDetails(localStorage.getItem('JWT')).subscribe({ next: data=>this.username=data["login"], error: err=>{console.log(err)}});
    
     console.log();
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
          this.tasks = data;
          this.todo = data;
         
          console.log("Todo Data",data);
         
        },
       
        error: (e) => console.error(e)
        
      });

      
     const bSubject = new BehaviorSubject<any>(0);
     this.todoservice.getAll().subscribe(data => console.log("BehaviorSubject Todo data:",));

    bSubject.next(200);

    bSubject.subscribe(d => console.log(`BehaviorSubject Subscriber2:  ${d}`));

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
    this.currentTask = {};
    this.currentIndex = -1;
  }


  setActiveTutorial(tutorial: Task, index: number): void {
    this.currentTask = tutorial;
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
      title: this.currentTask.title,
      description: this.currentTask.description,
      Status: status
    };

    this.todoservice.update(this.currentTask.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentTask.Status = status;
        },
        error: (e) => console.error(e)
      });
      
  }




}


