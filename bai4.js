let Animal=function (name, weight ) {
    this.name = name;
    this.weight = weight;
    this.setName = function (name) {
        this.name = name
    }

    this.setWeight = function (weight) {
        this.weight = weight;
    }
    this.getName = function () {
        return this.name;
    }
    this.getWeight = function () {
        return this.weight;
    }

}
let objAnimal1 =new Animal(Elephant,45,6);

let objAnimal2 =new Animal(Mouse,2.5);
let name=objAnimal1.getName();
let weight=objAnimal1.getWeight();
let name=objAnimal2.getName();
let weight=objAnimal2.getWeight();



