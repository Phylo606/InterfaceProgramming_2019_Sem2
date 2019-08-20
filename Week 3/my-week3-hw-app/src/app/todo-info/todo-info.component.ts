import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from '../Todo';

@Component({
  selector: 'app-todo-info',
  templateUrl: './todo-info.component.html',
  styleUrls: ['./todo-info.component.css']
})
export class TodoInfoComponent implements OnInit {

  @Input() item: TodoItem;
  constructor() { }

  ngOnInit() { 
  }
}


