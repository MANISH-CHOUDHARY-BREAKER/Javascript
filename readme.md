# JavaScript — Complete Guide

> A comprehensive JavaScript learning guide covering fundamentals, ES6+, DOM, asynchronous programming, OOP, advanced concepts, browser APIs, Node.js, and interview preparation.

---

## 📌 Table of Contents

* [What is JavaScript?](#-what-is-javascript)
* [Why Learn JavaScript?](#-why-learn-javascript)
* [JavaScript Features](#-javascript-features)
* [JavaScript vs Java](#-javascript-vs-java)
* [How JavaScript Works](#-how-javascript-works)
* [Getting Started](#-getting-started)
* [Syntax](#-syntax)
* [Variables](#-variables)
* [Data Types](#-data-types)
* [Type Conversion](#-type-conversion)
* [Operators](#-operators)
* [Conditional Statements](#-conditional-statements)
* [Loops](#-loops)
* [Functions](#-functions)
* [Scope](#-scope)
* [Hoisting](#-hoisting)
* [Closures](#-closures)
* [Arrays](#-arrays)
* [Strings](#-strings)
* [Objects](#-objects)
* [Destructuring](#-destructuring)
* [Spread & Rest Operators](#-spread--rest-operators)
* [Template Literals](#-template-literals)
* [Date & Time](#-date--time)
* [Math](#-math)
* [Map, Set, WeakMap & WeakSet](#-map-set-weakmap--weakset)
* [DOM](#-dom-document-object-model)
* [Events](#-events)
* [Event Bubbling & Capturing](#-event-bubbling--capturing)
* [Forms](#-forms)
* [Browser Storage](#-browser-storage)
* [JSON](#-json)
* [Error Handling](#-error-handling)
* [Synchronous vs Asynchronous JavaScript](#-synchronous-vs-asynchronous-javascript)
* [Callbacks](#-callbacks)
* [Promises](#-promises)
* [Async/Await](#-asyncawait)
* [Fetch API](#-fetch-api)
* [Event Loop](#-event-loop)
* [OOP](#-object-oriented-programming)
* [Prototypes](#-prototypes)
* [Classes](#-classes)
* [Modules](#-modules)
* [ES6+ Features](#-modern-javascript-es6)
* [Functional Programming](#-functional-programming)
* [Regular Expressions](#-regular-expressions)
* [Web APIs](#-important-browser-web-apis)
* [JavaScript Security](#-javascript-security-basics)
* [Performance](#-javascript-performance)
* [Node.js](#-javascript-with-nodejs)
* [npm](#-npm)
* [Common JavaScript Tools](#-common-javascript-tools)
* [Common Interview Questions](#-common-interview-questions)
* [Practice Projects](#-practice-projects)
* [Best Practices](#-best-practices)
* [Useful Resources](#-useful-resources)

---

# 🚀 What is JavaScript?

JavaScript is a **high-level, dynamically typed, prototype-based programming language** primarily used to create interactive and dynamic web applications.

JavaScript can run in:

* Web browsers
* Servers using Node.js
* Desktop applications
* Mobile applications
* Cloud applications
* Command-line applications
* Desktop apps using Electron
* Cross-platform applications

### Example

```javascript
console.log("Hello, World!");
```

Output:

```text
Hello, World!
```

---

# 🎯 Why Learn JavaScript?

JavaScript is one of the core technologies of web development:

```text
HTML       → Structure
CSS        → Styling
JavaScript → Behavior / Logic
```

JavaScript is used in:

* Frontend development
* Backend development
* Full-stack development
* Web applications
* REST APIs
* Real-time applications
* Mobile applications
* Desktop applications
* Automation
* Browser extensions
* Serverless applications

---

# ⭐ JavaScript Features

* High-level
* Dynamically typed
* Interpreted/JIT compiled
* Object-oriented
* Prototype-based
* Event-driven
* Single-threaded execution model
* Asynchronous programming support
* First-class functions
* Functional programming support
* Garbage collection
* Cross-platform
* Rich ecosystem

---

# 🆚 JavaScript vs Java

| JavaScript                  | Java             |
| --------------------------- | ---------------- |
| Dynamically typed           | Statically typed |
| Primarily prototype-based   | Class-based      |
| Mainly web-focused          | General-purpose  |
| Runs in browser and Node.js | Runs on JVM      |
| `.js`                       | `.java`          |
| JavaScript engine           | JVM              |

> JavaScript and Java are different programming languages.

---

# ⚙️ How JavaScript Works

A simplified execution flow:

```text
JavaScript Code
      ↓
JavaScript Engine
      ↓
Parser
      ↓
AST
      ↓
Interpreter / JIT Compiler
      ↓
Machine Code
      ↓
CPU
```

Popular JavaScript engines:

| Engine         | Used By              |
| -------------- | -------------------- |
| V8             | Chrome, Node.js      |
| SpiderMonkey   | Firefox              |
| JavaScriptCore | Safari               |
| Chakra         | Older Microsoft Edge |

---

# 🛠️ Getting Started

## Browser Console

Open Chrome:

```text
Right Click → Inspect → Console
```

Then:

```javascript
console.log("Hello JavaScript");
```

## HTML File

```html
<!DOCTYPE html>
<html>
<head>
    <title>JavaScript</title>
</head>
<body>

    <h1>Hello JavaScript</h1>

    <script src="script.js"></script>
</body>
</html>
```

`script.js`

```javascript
console.log("JavaScript loaded");
```

---

# 📝 Syntax

```javascript
let name = "Manish";
let age = 20;

console.log(name);
console.log(age);
```

### Comments

Single-line:

```javascript
// This is a comment
```

Multi-line:

```javascript
/*
   This is
   a multi-line comment
*/
```

---

# 📦 Variables

JavaScript provides:

```javascript
var
let
const
```

## var

```javascript
var name = "John";
name = "Mike";
```

`var` is function-scoped.

## let

```javascript
let age = 20;
age = 21;
```

`let` is block-scoped.

## const

```javascript
const PI = 3.14159;
```

A `const` variable cannot be reassigned.

### Recommended

Prefer:

```javascript
const
```

and use:

```javascript
let
```

when reassignment is required.

Avoid using `var` in modern JavaScript unless there is a specific reason.

---

# 🔢 Data Types

JavaScript has primitive and non-primitive/reference values.

## Primitive Types

```text
String
Number
BigInt
Boolean
Undefined
Null
Symbol
```

## Object

Objects are non-primitive/reference values.

---

## String

```javascript
let name = "Manish";
```

```javascript
let message = 'Hello';
```

```javascript
let text = `Hello ${name}`;
```

---

## Number

```javascript
let age = 20;
let price = 99.99;
```

JavaScript uses floating-point numbers for its `Number` type.

Special numeric values:

```javascript
Infinity
-Infinity
NaN
```

---

## BigInt

Used for integers larger than the safe integer range of `Number`.

```javascript
const bigNumber = 123456789012345678901234567890n;
```

---

## Boolean

```javascript
let isLoggedIn = true;
let isAdmin = false;
```

---

## Undefined

```javascript
let value;

console.log(value);
```

Output:

```text
undefined
```

---

## Null

```javascript
let user = null;
```

`null` represents an intentional absence of a value.

---

## Symbol

```javascript
const id = Symbol("id");
```

Symbols are unique primitive values commonly used as unique object keys.

---

# 🔄 Type Conversion

## String

```javascript
String(123);
```

## Number

```javascript
Number("123");
```

## Boolean

```javascript
Boolean(1);
```

---

# ⚡ Type Coercion

JavaScript can automatically convert values during operations.

```javascript
console.log("5" + 2);
```

Output:

```text
52
```

But:

```javascript
console.log("5" - 2);
```

Output:

```text
3
```

---

# ⚖️ == vs ===

### Loose Equality

```javascript
5 == "5";
```

Result:

```text
true
```

### Strict Equality

```javascript
5 === "5";
```

Result:

```text
false
```

Generally prefer:

```javascript
===
```

and:

```javascript
!==
```

---

# ➕ Operators

## Arithmetic

```javascript
+
-
*
/
%
**
```

Example:

```javascript
let result = 10 + 5;
```

## Assignment

```javascript
=
+=
-=
*=
/=
%=
```

## Comparison

```javascript
>
<
>=
<=
==
===
!=
!==
```

## Logical

```javascript
&&
||
!
```

## Nullish Coalescing

```javascript
const name = userName ?? "Guest";
```

## Optional Chaining

```javascript
user?.profile?.name;
```

---

# 🔀 Conditional Statements

## if

```javascript
if (age >= 18) {
    console.log("Adult");
}
```

## if...else

```javascript
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
```

## else if

```javascript
if (marks >= 90) {
    console.log("A");
} else if (marks >= 75) {
    console.log("B");
} else {
    console.log("C");
}
```

## Ternary Operator

```javascript
const result = age >= 18 ? "Adult" : "Minor";
```

## switch

```javascript
switch (day) {
    case "Monday":
        console.log("Start");
        break;

    case "Friday":
        console.log("Weekend is near"
```
