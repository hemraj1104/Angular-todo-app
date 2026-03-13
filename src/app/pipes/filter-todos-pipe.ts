import { Todos } from './../todos/todos';
import { todo } from '../model/todo.type';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTodos',
  standalone: true,
})
export class FilterTodosPipe implements PipeTransform {
  transform(Todos: todo[], searchTerm: string): todo[] {
    if (!searchTerm) {
      return Todos;
    }
    const text = searchTerm.toLowerCase();
    return Todos.filter(todo => { 
      return todo.title?.toLowerCase().includes(text) 
    });
  }
}
