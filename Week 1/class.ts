class drink {
    Brand: string;
    Flavor: string;
    Size: string
    

    constructor(brand: string, flavor: string, size: string) {
      this.Brand = brand;
      this.Flavor = flavor;
      this.Size = size;
    }
  }
  var myDrink = new drink("Coca Cola", "Vanilla", "Medium");
  console.log(myDrink.Brand);