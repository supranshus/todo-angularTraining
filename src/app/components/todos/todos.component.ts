import { Component, inject, OnInit } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-todos',
  standalone: false,
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
  username: string | null | undefined
  private snack=inject(MatSnackBar);
  ngOnInit(): void {
     this.username=localStorage.getItem('username');
  }

  inp!:string;
  todos:Todo[]=[]

  
  createTodo(text:string):void{
    if(this.check()){
      const todo=new Todo(text);
      this.todos.push(todo);
      this.inp=''
    }
    else{
      this.snack.open('Please enter something!','OK',{duration:3500})
    }
    console.log(this.todos);
  }
  
  deletTodo(i:number):void{
    if(i>=0 && i<this.todos.length){
      this.todos.splice(i,1);
    }
  }

  check():boolean{
    if( this.inp=='' || this.inp==null){
      return false;
    }
    return true;
  }

}
