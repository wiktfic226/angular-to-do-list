import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
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

  constructor(private todoService: TodosService) { }

  ngOnInit(): void {
  }

  getItemName() {
    return this.todo.name;
  }

  deleteTask() {
    this.todoService.delete(this.todo);
  }

  markTask() {
    this.todoService.markTask(this.todo);
  }

  getDoneDateString() {
    return this.todo.dateDone?.toDateString();
  }
}
