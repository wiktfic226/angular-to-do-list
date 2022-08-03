import { Component, ComponentRef, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { timer } from 'rxjs';
import { AlertComponent, AlertState } from './alert/alert/alert.component';
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

  @ViewChild('container', {read: ViewContainerRef, static: true})
  private container!: ViewContainerRef;

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
  }

  addTask() {
    this.taskToAdd = this.taskElement.nativeElement.value;
    this.taskElement.nativeElement.value="";
    this.taskElement.nativeElement.focus();
    if(this.taskToAdd.length > 5) {
      this.todosService.add({name: this.taskToAdd, done: false} as Todo);
      this.renderNotification("Task added!", AlertState.Success);
    } else 
      this.renderNotification("Task's name must be longer than 5 characters", AlertState.Error);
  }

  deleteTask(todo: Todo) {
    this.todosService.delete(todo);
    this.renderNotification("Task deleted!", AlertState.Success);
  }

  markTask(todo: Todo) {
    this.todosService.markTask(todo);
    this.renderNotification(todo.done === true ? "Task done!" : "Task undone", AlertState.Success);
  }

  getTasks() {
    return this.todosService.todos;
  }

  getDoneDateString(todo: Todo) {
    return todo.dateDone?.toDateString();
  }

  renderNotification(message: string, alertState: AlertState) {
    this.container.clear();
    const componentRef = this.container.createComponent(AlertComponent);
    componentRef.instance.text = message;
    componentRef.instance.state = alertState;
    const source = timer(3000);
    this.destroyNotification(componentRef);
  }

  destroyNotification(component: ComponentRef<AlertComponent>) {
    return new Promise(() => {
      setTimeout(() => {
        component.destroy();
      }, 2000);
    });
  }
}
