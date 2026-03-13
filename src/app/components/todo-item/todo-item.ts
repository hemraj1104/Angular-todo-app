import { TitleCasePipe, UpperCasePipe } from '@angular/common';
import { HighlightCompletedTodo } from '../../directives/highlight-completed-todo';
import { todo } from '../../model/todo.type';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  imports: [HighlightCompletedTodo, UpperCasePipe, TitleCasePipe],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.scss',
})
export class TodoItem {
  todo = input.required<todo>();
  todoToggled = output<todo>();
  todoClicked() {
    this.todoToggled.emit(this.todo()); 
  }
}
