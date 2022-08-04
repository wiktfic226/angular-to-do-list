import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
})
}

export interface Todo {
  id?: number
  name: string
  done: boolean
  dateDone?: Date
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private apiUrl: string = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) { }

  add(task: Todo):Observable<Todo> {
    return this.http.post<Todo>(this.apiUrl, task, httpOptions);
  }

  getTasks(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl);
  }

  delete(task: Todo):Observable<Todo> {
    return this.http.delete<Todo>(`${this.apiUrl}/${task.id}`);
  }

  markTask(task: Todo):Observable<Todo> {
    return this.http.put<Todo>(`${this.apiUrl}/${task.id}`, task, httpOptions);
    };

  }
  // add(task: Todo) {
  //   this.todos.push(task);
  // }

  // delete(task: Todo) {
  //   this.todos.forEach((element,index)=>{
  //     if(element.name==task.name) this.todos.splice(index, 1)
  //   });
  // }

  // markTask(task: Todo) {
  //   this.todos.forEach((element)=>{
  //     if(element.name==task.name) {
  //       element.done = !element.done;
  //       element.done ? element.dateDone = new Date() : null;
  //     }
  //   });
  // }
