import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from '../oauth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private serv:OAuthService,private router: Router) { }
  AuthUrl!: string;

  ngOnInit(): void {
    this.serv.GetAuthPage().subscribe({ next: data=>this.AuthUrl=data["authUrl"],error:  err=>{console.log(err)}});
  }

  go(){
    this.router.navigateByUrl('/products');

  }

  login()
  {
this.router.navigate(['/test'],{queryParams:{url:this.AuthUrl}});
  }

}
