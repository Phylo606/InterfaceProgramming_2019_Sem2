import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count: number = 55;
  constructor() { }

  ngOnInit() {
  }

  onButtonClick() {
    this.count++;
    // this.count = this.count +1;
  }
}
