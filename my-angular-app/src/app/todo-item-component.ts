import {Component, Input, Output, EventEmitter} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'app-todo-item',
    standalone: true,
    imports: [CommonModule], 
    template: `
    <li [class.completed]="todo.completed">
          <input 
        type="checkbox" 
        [checked]="todo.completed"
        (change)="onToggle()">
            <span>{{ todo.text }}</span>
            <button (click)="onDelete()">Delete</button>
    </li>
    `, 
     styles: [`
    li {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px;
      border: 1px solid #ddd;
      margin-bottom: 10px;
      border-radius: 4px;
    }

    li.completed span {
      text-decoration: line-through;
      color: #999;
    }

    button {
      margin-left: auto;
      padding: 5px 10px;
      cursor: pointer;
      background: #f44336;
      color: white;
      border: none;
      border-radius: 3px;
    }
  `]

})

export class TodoItemComponent {
    @Input() todo: any;
    @Output() toggle = new EventEmitter();
    @Output() delete = new EventEmitter();
    onToggle() {
        this.toggle.emit();
    }

    onDelete() {
        this.delete.emit();
    }
}