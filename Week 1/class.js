"use strict";
var car = /** @class */ (function () {
    function car(brand, model) {
        this.Brand = brand;
        this.Model = model;
    }
    return car;
}());
var Car1 = new car("Ford", "Focus");
var Car2 = new car("Toyota", "Corolla");
var Car3 = new car("Honda", "Civic");
var brands = [Car1, Car2, Car3];
var arrayLength = brands.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(brands[i]);
    //Do something
}
//console.log(brands);
//Lochie's example
/*
class Animal {
  size: number;
  name: string;

  constructor(size: number, name: string){
    this.size = size;
    this.name = name;
  }
}
class Dog extends Animal{
  breed: string;

  constructor(breed: string, size: number, name: string){
    super(size, name)
    this.breed = breed;
  }

  bark(loudness: number): number{
    return loudness * 3;
  }
}

let myDog: Dog = new Dog("multigrain", 1, "Joe");
*/
