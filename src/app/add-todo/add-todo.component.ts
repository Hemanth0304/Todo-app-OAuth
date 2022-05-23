import { Component, OnInit } from '@angular/core';
import { Task } from '../models/Task.model';
import { TodoServiceService } from '../service/todo-service.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { canComponentLeave } from '../unsaved-form.guard';
import { SaveData } from '../save.interface';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})

export class AddTodoComponent implements OnInit,canComponentLeave, SaveData {
 
  today: Date = new Date();
  tutorial: Task = {
     title: '',
    description: '',
    today:this.today,
    Status: false
  };

  t:FormControl = new FormControl();

  //CanDeactivate 
canLeave():boolean{
  if(this.todoform.dirty)
  {
    return window.confirm('you have unsaved changes,Do you still want to continue ?');
  }
  else{
    if(!this.todoform.dirty){
      return window.confirm('you have unsaved changes ?');
    }
    
    return true; 

  }
  
}






submitted = false;
formdeta: any;
todoform:any;


  
 
  

  constructor( private formBuilder: FormBuilder, private todoservice: TodoServiceService,private router:Router) { }
  
  isDataSaved(): Boolean {
  return !this.todoform.dirty;
  }

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
    
    
  
    this.todoservice.create(this.todoform.value)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });   
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
