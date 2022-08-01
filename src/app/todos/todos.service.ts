import { Injectable } from '@angular/core';

export interface Todo {
  name: string
  done: boolean
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todos: Array<Todo> = [];
  constructor() { }

  add(task: Todo) {
    this.todos.push(task);
    console.log(this.todos);
  }

  delete(task: Todo) {
    this.todos.forEach((element,index)=>{
      if(element.name==task.name) this.todos.splice(index, 1)
    });
  }

  markTask(task: Todo) {
    this.todos.forEach((element,index)=>{
      if(element.name==task.name) element.done = !element.done;
    });
  }
}
