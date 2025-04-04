import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../../models/todo.model';

@Component({
  selector: 'app-todo',
  standalone: false,
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  @Input() todo!: Todo;
  @Input() i!: number;
  @Output() deleteTodoEvent = new EventEmitter<number>();

  deletTodo(): void {
    this.deleteTodoEvent.emit(this.i); 
  }
}