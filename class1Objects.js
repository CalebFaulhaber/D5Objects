// JS: Objects

// Creating Object

const dog = {
    age: 10,
    firstName: 'bailey',
    "last name": 'winston',
    toys: [
      "amazon box",
      "pork leg bone",
      "rubber bunny",
      "torn teddy bear"
    ]
  }
  
  // console.log(dog);
  
  // Reading values
  // dot notation
  console.log(dog.age) // 10
  
  // square bracket notation []
  // dot notation is syntax sugar of this
  console.log(dog["age"]); // 10
  
  // If you have an illegal key name:
  // console.log(dog.last name); // gives us error
  console.log(dog["last name"]);
  
  // Using expressions to resolve key names:
  console.log(dog["to" + "ys"]); // [ 'amazon box', 'pork leg bone', 'rubber bunny', 'torn teddy bear' ]
  
  // Write new or edit existing attributes
  // Select a key using dot notation or square bracket notation then use the assignment operator
  dog.age = 12;