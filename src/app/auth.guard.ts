import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  token= localStorage.getItem('JWT')

  constructor(private router : Router){

  }
  canActivate(){
    if(!this.token){
      this.router.navigateByUrl('/');
      return false; 
     
      
   }
    return true;  
  }

  }
  

