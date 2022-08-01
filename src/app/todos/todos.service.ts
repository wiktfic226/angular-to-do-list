import { Injectable, Optional, SkipSelf } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todos: Array<string> = [];
  constructor() { }

  add(task: string) {
    this.todos.push(task);
    console.log(this.todos);
  }
}
