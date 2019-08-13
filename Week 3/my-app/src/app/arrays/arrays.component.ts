import { Component, OnInit } from '@angular/core';

class Hero{
  name: string;
  age: number;

  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }
}

@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./arrays.component.css']
})
export class ArraysComponent implements OnInit {

  names = ["Bob", "Steve", "Harold", "Todd", "Frank"];
  heroes: Hero[] = [
    new Hero("Iron Man", 99),
    new Hero("Spider-Man", 99),
  ];
  constructor() { }

  ngOnInit() {
  }
  
  addName(name: string){
    this.names.push(name);
    
  }
  addHero(name:string, age:number){
    this.heroes.push(new Hero(name, age));
  }
  removeName(name:string){
    alert(name);
    var index = this.names.indexOf(name);
    this.names.splice(index, 1);
  }

  removeHero(hero: Hero){
    var index = this.heroes.indexOf(hero);
    this.heroes.splice(index, 1);
  }

}
