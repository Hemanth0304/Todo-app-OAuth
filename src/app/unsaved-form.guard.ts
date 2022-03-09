import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


export interface canComponentLeave{
  canLeave:()=> boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UnsavedFormGuard implements CanDeactivate<canComponentLeave> {
  canDeactivate(component:canComponentLeave)
  {
     console.warn("CanDeactivate Activated")
    if(component.canLeave){
      return component.canLeave();
    }
    return true;

  }
  
  
}
