import { Component, ComponentRef, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
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
  tasks: Todo[] = [];
  @ViewChild('container', {read: ViewContainerRef, static: true})
  private container!: ViewContainerRef;

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.todosService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }

  addTask() {
    this.taskToAdd = this.taskElement.nativeElement.value;
    this.taskElement.nativeElement.value="";
    this.taskElement.nativeElement.focus();
    if(this.taskToAdd.length >= 5) {
      this.todosService.add({name: this.taskToAdd, done: false} as Todo).subscribe((task) => this.tasks.push(task));
      this.renderNotification("Task added!", AlertState.Success);
    } else 
      this.renderNotification("Task's name must be longer than 5 characters", AlertState.Error);
  }

  deleteTask(todo: Todo) {
    this.todosService.delete(todo).subscribe(() => this.tasks = this.tasks.filter(t => t.id !== todo.id));
    this.renderNotification("Task deleted!", AlertState.Success);
  }

  markTask(todo: Todo) {
    todo.done = !todo.done;
    todo.dateDone = todo.done == true ? new Date() : undefined;
    this.todosService.markTask(todo).subscribe();
    this.renderNotification(todo.done === true ? "Task done!" : "Task undone", AlertState.Success);
  }

  getTasks() {
    return this.tasks;
  }

  getDoneDateString(todo: Todo) {
    return todo.dateDone?.toDateString();
  }

  renderNotification(message: string, alertState: AlertState) {
    this.container.clear();
    const componentRef = this.container.createComponent(AlertComponent);
    componentRef.instance.text = message;
    componentRef.instance.state = alertState;
    this.destroyNotification(componentRef);
  }

  destroyNotification(component: ComponentRef<AlertComponent>) {
    return new Promise(() => {
      setTimeout(() => {
        component.destroy();
      }, 1800);
    });
  }
}
