import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoItemComponent } from './todo-item-component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, FormsModule, TodoItemComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'My Angular Todo App';
    newTodo = '';
    todos = [
        {id: 1, text: 'Learn Angular', completed: false},
        {id: 2, text: 'Build an app', completed: false}
    ];

    addTodo() {
        if (this.newTodo.trim()) {
            this.todos.push({
                id: Date.now(),
                text: this.newTodo,
                completed: false
            });
            this.newTodo = '';
        }
  }

        deleteTodo(id: number) {
            this.todos = this.todos.filter(todo => todo.id !== id);
        }

        toggleComplete(todo: any) {
            todo.completed = !todo.completed;
        }
    }
  