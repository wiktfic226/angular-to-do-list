import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TodosService, Todo } from './todos/todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'to-do-list';
  
  @ViewChild('task', { static: true }) 
  taskElement!: ElementRef;
  taskToAdd: string = "";

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
  }

  addTask() {
    this.taskToAdd = this.taskElement.nativeElement.value;
    this.taskElement.nativeElement.value="";
    this.taskElement.nativeElement.focus();
    this.todosService.add({name: this.taskToAdd, done: false} as Todo);
  }

  getTasks() {
    return this.todosService.todos;
  }
}
