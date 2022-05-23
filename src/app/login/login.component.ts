import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
// import { OAuthService } from '../oauth.service';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  AuthUrl!: string;
  invalidLogin: boolean;
  

  constructor(private router:Router, private http: HttpClient) { }
  ngOnInit() {
    // this.serv.GetAuthPage().subscribe({ next: data=>this.AuthUrl=data["authUrl"],error:  err=>{console.log(err)}});
}


  login( form: NgForm)
  {
    const credentials ={
      'username': form.value.username,
      'Password': form.value.Password
    }
    this.http.post("https://localhost:44340/api/auth/Todo", credentials)
    .subscribe(response =>{
      const token =(<any>response).token;
      localStorage.setItem("JWT",token);
      this.invalidLogin = false;
      this.router.navigate(['/todos']);
    }, 
    err => {
      this.invalidLogin =true;
    })
    
    
    


  }
  // {queryParams:{url:this.AuthUrl}}

  

}
