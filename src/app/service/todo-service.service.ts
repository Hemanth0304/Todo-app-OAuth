import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/Task.model';

const baseUrl = 'https://localhost:44340/api/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Task[]> {
    return this.http.get<Task[]>(`${baseUrl}/GetTodo`);
  }

  

  getAlldone(): Observable<Task[]>{
    return this.http.get<Task[]>(`${baseUrl}/GetDone`);
    
  }


  

  get(id: any): Observable<Task> {
    return this.http.get(`${baseUrl}/GetTask/${id}`);
  }



  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data): Observable<any> {
    return this.http.put(`${baseUrl}/UpdateTask/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  // findByTitle(title: any): Observable<Tutorial[]> {
  //   return this.http.get<Tutorial[]>(`${baseUrl}?title=${title}`);
  // }

}
