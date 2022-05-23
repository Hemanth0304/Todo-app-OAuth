import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'https://localhost:44340/api/User';


@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {
 
 

  constructor(private http: HttpClient) { }


  register(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
}



}
