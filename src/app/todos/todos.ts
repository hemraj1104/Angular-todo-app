import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoService } from '../services/todos';
import { todo } from '../model/todo.type';
import { catchError } from 'rxjs';
import { TodoItem } from '../components/todo-item/todo-item';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../pipes/filter-todos-pipe';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodoItem, FormsModule, FilterTodosPipe],
  templateUrl: './todos.html',
  styleUrl: './todos.scss',
})
export class Todos implements OnInit {
  todoService = inject(TodoService);
  todoItems = signal<Array<todo>>([]);
  searchTerm = signal('');
  ngOnInit(): void {
    this.todoService.getTodoFromApi()
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        })
      )
      .subscribe((Todos) => {
        this.todoItems.set(Todos);
      })
  }
  updateTodoItem(todoItem: todo) {
    this.todoItems.update((Todos) => {
      return Todos.map((todo) => {
        if (todo.id == todoItem.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    });
  };
}
