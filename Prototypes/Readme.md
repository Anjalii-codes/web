# Protoypes

+ Prototypes are the mechanism by which JavaScript objects inherit features from one another.
 
## Prototye chain

+ Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.

## Example 
``` js
    const myArray = [1, 2, 3];
    console.log(myArray.push); 
    console.log(myArray.toString()); 

```
### How the Prototype Chain Works Here?
   1. myArray does not have .push() or .toString() directly.
   2. JavaScript looks at Array.prototype, which has .push(), .map(), and many array methods.
   3. If the method is not found there, it looks up to Object.prototype, which has .toString().
   4. The chain ends at null, meaning there are no more prototypes to check.

## Prototype Chain Visualized for myArray
``` plaintext

    myArray ---> Array.prototype ---> Object.prototype ---> null

```
## What is the prototype for myArray? To find out, we can use the function Object.getPrototypeOf()
``` js
    Object.getPrototypeOf(MyArray); 

```

## Shadowing Properties

+ Shadowing happens when an object has a property or method with the same name as an inherited one.
``` js
    const myDate = new Date(1995, 11, 17);

    console.log(myDate.getTime()); // 819129600000

    myDate.getTime = function () {
    console.log("something else!");
    };

    myDate.getTime(); // 'something else!'

```
+ The object’s own version takes priority, hiding the inherited one.
+ The prototype still has the original method/property, but it’s ignored for that object.

# **Using Constructor Functions to Set a Prototype in JavaScript**

## **Step 1: Create a Constructor Function**
```javascript
function Person(name) {
  this.name = name;
}
```

## **Step 2: Add a Method to the Prototype**
```javascript
Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`);
};
```

## **Step 3: Create an Object Using `new`**
```javascript
const john = new Person("John");
john.sayHello(); // Output: "Hello, my name is John"
```

## **Step 4: Verify Prototype Inheritance**
```javascript
console.log(Object.getPrototypeOf(john) === Person.prototype); // true
```

## **Step 5: Add Another Method to the Prototype**
```javascript
Person.prototype.greet = function () {
  console.log("Good day!");
};

john.greet(); // Output: "Good day!"
```


 

