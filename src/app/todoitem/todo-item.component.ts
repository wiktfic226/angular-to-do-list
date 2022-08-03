import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Todo, TodosService } from '../todos/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: Todo;
  @ViewChild('donecheckbox', { static: true }) 
  doneCheckbox!: ElementRef;

  @Output() deleteTaskEvent: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() markTaskEvent: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit(): void {
  }

  getItemName() {
    return this.todo.name;
  }

  deleteTask() {
    this.deleteTaskEvent.emit(this.todo);
  }

  markTask() {
    this.markTaskEvent.emit(this.todo);
  }

  getDoneDateString() {
    return this.todo.dateDone?.toDateString();
  }
}
