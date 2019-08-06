
class car {
    Brand: string;
    Model: string;
    

    constructor(brand: string, model: string) {
      this.Brand = brand;
      this.Model = model;
    }
  }
  let Car1 = new car("Ford", "Focus");
  let Car2 = new car("Toyota", "Corolla");
  let Car3 = new car("Honda", "Civic");
  
  let brands: car[] = [Car1, Car2, Car3];
  brands.forEach(item => console.log(item));
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
  
  