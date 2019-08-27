import { Component } from '@angular/core';
import { TodoItem } from './Todo';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos = [
    new TodoItem("Todo 1", true),
    new TodoItem("Todo 2", true),
    new TodoItem("Todo 3", false),
    new TodoItem("Todo 4", false),
    new TodoItem("Todo 5", true),
  ];

  //addNewItem(value: string) {
    //this.newItemEvent.emit(value);
  //}

  setTodoName(value: string){
    new TodoItem(value, false)
  }

  
}
