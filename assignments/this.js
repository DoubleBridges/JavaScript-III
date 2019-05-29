/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Function being called by `new`, constructor
      creates a new object with all of the properties of the template obj (inheritance) sets the reference for _this_

* 2. Function called by call(), apply(), bind()/ explicit binding
      forcing a fuction to call a particular obj w/out putting a property reference on it
      apply will allow you to pass an array
      bind creates a new function that will act as the original but with _this_ predefined


* 3. Function called as a method/ implicit binding
      this refers to whatever preceeds the .

* 4. Function called globally, default binding
      If you call `this` globally it binds to the window by default. It will pick up globally declared
      variables though, since window is the default object.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

const someFunc = function () {
  console.log(this);
};

// someFunc();

// Principle 2

// code example for Implicit Binding

const someObj = {
  someVal: 43,
	impBind: function (someOtherVal) {        
	console.log(someOtherVal)
    }
};

someObj.impBind(45);
// Principle 3

// code example for New Binding

function ZooAnimal(species, age, gender) {
  this.species = species;
  this.age = age;
  this.gender = gender;
  this.animalDescription = function() {
    console.log(`This ${species} is ${age} years old, and a ${gender}`)
  }
}

const zebra = new ZooAnimal('Zebra', 6, 'Male');

zebra.animalDescription();

// Principle 4

// code example for Explicit Binding

function greet() {
  console.log(`Hello, ${this.name}`);
}

let someOne = {
  name: 'Jethro'
}

greet.call(someOne);