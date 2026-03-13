import { HttpClient } from '@angular/common/http';
import { todo } from '../model/todo.type';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  http = inject(HttpClient);
  getTodoFromApi() { 
    const url = `https://jsonplaceholder.typicode.com/todos`;
    return this.http.get<Array<todo>>(url);
  }
}
