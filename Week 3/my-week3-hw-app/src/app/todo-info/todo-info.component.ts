import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../Todo';

@Component({
  selector: 'app-todo-info',
  templateUrl: './todo-info.component.html',
  styleUrls: ['./todo-info.component.css']
})



export class TodoInfoComponent implements OnInit {

  @Input() item: TodoItem;
  constructor() { }

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  ngOnInit() { 
  }
}


