# 🌟 Introduction to Javascript

This README explains basic JavaScript functions for printing messages and using return values.

## 📌 Code Overview

```js
function printHello() {
    console.log("Hello World!");
  }
  
  function printGreet(name) {
  
    console.log(`Hello! ${name} What's Up?`);
  }
  
  function addNum(num1, num2){
      return num1 + num2
  }
  
  printHello();
  printGreet("Anjali Prasad");
  addNum(1,2)
  console.log(addNum(2,4));
```

## 🛠 Functions Explained
+ printHello() - Prints "Hello World!".

+ PrintGreet(name) - Prints a greeting with the given name.

+ addNum(num1, num2) - Returns the sum of two numbers.


## 🖥 Understanding console.log()

+ Console.log is a javascript built-in function. It is used to display and debug output.

- [x] ## Why console.log()?
+ Prints messages, variables and function results.
+ Supports Multiple datatypes including strings, numbers, and objects.
+ Useful for tracking Program flow.
  
## 🔍 Examples
```js 
 console.log("Hi, its Anjali Prasad!") // The output is "Hi, its Anjali Prasad!"
 ```

## 🔑 Key Concepts Covered
- [x] String interpolation

- [x] Function declaration and invocation

- [x] Return statements

- [x] console logging

## 📌 Expected Output 
```
Hello World!
Hello! Anjali Prasad What's Up?
6
```