import { Component, OnInit } from '@angular/core';
import { Tutorial } from '../models/tutorial.model';
import { TodoServiceService } from '../service/todo-service.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { canComponentLeave } from '../unsaved-form.guard';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})

export class AddTodoComponent implements OnInit,canComponentLeave  {
 
  today: Date = new Date();
  tutorial: Tutorial = {
    // title: '',
    description: '',
    today:this.today,
    Status: false
  };

  title:FormControl = new FormControl();


  submitted = false;
formdeta: any;
todoform:any;

//CanDeactivate 
canLeave():boolean{
  if(this.todoform.dirty)
  {
    return window.confirm('you have unsaved changes,Do you still want to continue ?')
  }
  return true;
}
  
 
  

  constructor( private formBuilder: FormBuilder, private todoservice: TodoServiceService,private router:Router) { }

  ngOnInit(): void {

     this.todoform = this.formBuilder.group({
      title:['',Validators.required],
      description:['',Validators.required],
      today:[this.today]



     });
  }
 
  get f() {
    return this.todoform.controls;
  }

  logout()
  {
this.router.navigate(['/']);
  }

  


  onSubmit(): void {

   

    
    // const data = {
    //   title: this.tutorial.title,
    //   description: this.tutorial.description,
    //   today:this.tutorial.today
      
    // };
    
  
    this.todoservice.create(this.todoform.value)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
    // console.log(data)
    
}


newTutorial(): void {
  this.submitted = false;
  this.tutorial = {
    // title: '',
    description: '',
    Status: false
  };
}

}
