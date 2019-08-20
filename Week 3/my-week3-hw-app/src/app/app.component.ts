import { Component } from '@angular/core';
import { TodoItem } from './Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos = [
    new TodoItem("add more todos", true),
    new TodoItem("add even more", true),
    new TodoItem("add two more", false),
    new TodoItem("add one more", false),
    new TodoItem("all done", true),
  ];
  //title = 'input-example';

  //theirName = "Matt Phyland";

  /*onKeyUp(value: string){
    this.theirName = value;
  }*/
}
