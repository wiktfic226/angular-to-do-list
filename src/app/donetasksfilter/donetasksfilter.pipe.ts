import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todos/todos.service';

@Pipe({
  name: 'donetasksfilter',
  pure: false
})
export class DoneTasksFilterPipe implements PipeTransform {

  transform(todos: Array<Todo>, isDone: boolean): Array<Todo> {
    return todos.filter(item => item.done == isDone);
  }
}
