import { Component, ElementRef, ViewChild } from '@angular/core';
import { TodosService } from './todos/todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent{
  title = 'to-do-list';
  
  @ViewChild('task', { static: true }) 
  taskElement!: ElementRef;
  taskToAdd: string = "";

  constructor(private todosService: TodosService) { }

  addTask() {
    this.taskToAdd = this.taskElement.nativeElement.value;
    this.taskElement.nativeElement.value="";
    this.taskElement.nativeElement.focus();
    this.todosService.add(this.taskToAdd);
  }

  getTasks() {
    return this.todosService.todos;
  }
}
