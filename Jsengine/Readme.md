A **JavaScript Engine** is the program inside a browser (or another environment like Node.js) that **reads**, **optimizes**, and **runs** JavaScript code.

Think of it as the *machine* that turns your JS code into actions.

---

# **What a JavaScript Engine Does**

A JS engine typically has these steps:

### 1️⃣ **Parsing**

* Reads your JavaScript code
* Checks it for errors
* Converts it into an Abstract Syntax Tree (AST)

### 2️⃣ **Compilation (JIT – Just-In-Time)**

* Converts JavaScript into machine code
* Optimizes your code while it runs (modern engines do a lot of smart optimization)

### 3️⃣ **Execution**

* Runs the compiled machine code on your CPU
* Manages memory, garbage collection, scopes, etc.

---

# 🔥 Popular JavaScript Engines

| Engine                     | Used In                      | Notes                      |
| -------------------------- | ---------------------------- | -------------------------- |
| **V8**                     | Google Chrome, Node.js, Deno | Fastest, written by Google |
| **SpiderMonkey**           | Mozilla Firefox              | The first JS engine        |
| **JavaScriptCore (Nitro)** | Safari                       | Apple’s JS engine          |
| **Chakra**                 | Old Microsoft Edge           | Now discontinued           |

---

# 📦 Example: What V8 does when you run JS

Let's say you run:

```js
function add(a, b) {
  return a + b;
}

add(2, 3);
```

V8 will:

1. Parse the code
2. Convert to AST
3. Compile to bytecode
4. Optimize the function if it's called many times
5. Produce fast machine code
6. Execute it

It even *de-optimizes* code if needed.

---

# ⚡ Why we need JavaScript engines

* They make JavaScript **fast**
* They allow JavaScript to run in browsers
* Node.js uses an engine to run JS outside browsers
* They handle garbage collection, event loops, memory, etc.

---

# 🧠 Engines vs Runtimes (important distinction)

A **JavaScript engine** only executes JavaScript.

A **JavaScript runtime** includes additional APIs:

| Engines provide         | Runtimes provide                          |
| ----------------------- | ----------------------------------------- |
| parsing, JIT, execution | web APIs (DOM, fetch), event loop, timers |
| memory management       | modules, environment, dev tools           |

**Examples:**

* Chrome runtime = V8 + Web APIs
* Node.js runtime = V8 + Node APIs

---

# Summary

👉 A **JavaScript engine** is the internal program that reads and runs JavaScript.
👉 Different browsers have different engines.
👉 Engines optimize JS to make it run fast and safely.


