# Things I Learned 🚀

This repository documents my learning journey in JavaScript. Below are some key concepts I have explored and understood.

## 📌 Data Types
JavaScript has two main categories of data types:

### **Primitive Data Types**
- **String** - Represents textual data (`"Hello"`, `'World'`)
- **Number** - Represents numeric values (`10`, `3.14`)
- **Boolean** - Represents `true` or `false`
- **Undefined** - A variable that has been declared but not assigned a value
- **Null** - Represents an empty or unknown value
- **Symbol** - A unique and immutable primitive value
- **BigInt** - Used for arbitrarily large integers

### **Non-Primitive Data Types**
- **Object** - A collection of key-value pairs
- **Array** - An ordered collection of values

## 📌 `let`, `const`, and `var`
- **`var`**: Function-scoped, can be redeclared and updated.
- **`let`**: Block-scoped, can be updated but not redeclared.
- **`const`**: Block-scoped, cannot be updated or redeclared.

## 📌 Arrays
Arrays store multiple values in a single variable.
```javascript
const fruits = ["Apple", "Banana", "Cherry"];
```

## 📌 Objects
Objects store key-value pairs.
``` javascript
const person = {
  name: "Anjali",
  age: 25,
  city: "Mumbai"
};
console.log(person.name); // "Anjali"
