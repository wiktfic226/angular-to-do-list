import { Component, ComponentRef, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AlertComponent, AlertState } from './alert/alert/alert.component';
import { NotificationService } from './notification/notification.service';
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

  constructor(private todosService: TodosService, private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  addTask() {
    this.taskToAdd = this.taskElement.nativeElement.value;
    this.taskElement.nativeElement.value="";
    this.taskElement.nativeElement.focus();
    if(this.taskToAdd.length > 5) {
      this.todosService.add({name: this.taskToAdd, done: false} as Todo);
      this.notificationService.renderNotification("Task added!", AlertState.Success);
    } else 
      this.notificationService.renderNotification("Task's name must be longer than 5 characters", AlertState.Error);
  }

  deleteTask(todo: Todo) {
    this.todosService.delete(todo);
    this.notificationService.renderNotification("Task deleted!", AlertState.Success);
  }

  markTask(todo: Todo) {
    this.todosService.markTask(todo);
    this.notificationService.renderNotification(todo.done === true ? "Task done!" : "Task undone", AlertState.Success);
  }

  getTasks() {
    return this.todosService.todos;
  }

  getDoneDateString(todo: Todo) {
    return todo.dateDone?.toDateString();
  }
}
