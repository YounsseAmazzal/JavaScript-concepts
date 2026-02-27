# Assets

[event loop source to read](https://theplakat.com/javascript-visualized-event-loop)

Sure! Let’s build an intuitive understanding of **Message Queue** and the **Event Loop** in JavaScript — two core concepts behind how JS handles concurrency.

---

# 🧠 Why This Matters

JavaScript is **single-threaded**. It can run **one piece of code at a time**.
But apps still handle *asynchronous* tasks like fetching data, waiting for timers, responding to user input, etc.
→ That’s where the **Event Loop** and **Message Queue** come in.

---

# 🌳 The Big Picture

### **Call Stack**

Where JS executes your code line by line.

### **Web APIs / Node APIs**

Where async operations run *outside* the main thread (like `setTimeout`, `fetch`, DOM events, etc.).

### **Message Queue (a.k.a. Callback Queue)**

Callbacks from completed async tasks wait here to run **when the call stack is free**.

### **Event Loop**

A "traffic controller" that moves tasks from the queue to the stack **when the stack is empty**.

---

# 🌀 How It All Works (Step-by-Step)

### Example:

```js
console.log("Start");

setTimeout(() => {
  console.log("Timeout done");
}, 0);

console.log("End");
```

### Execution:

1. **Call Stack** runs `console.log("Start")`
2. `setTimeout(...)` is encountered
   → Timer is delegated to **Web API**, JS continues
3. `"End"` is logged
4. Call stack is now empty
5. Web API finishes timer
   → callback goes to the **Message Queue**
6. **Event Loop** sees the stack empty and pulls the callback
   → executes `"Timeout done"`

### Output:

```
Start
End
Timeout done
```

Even though the delay is `0`, it still waits until after synchronous code finishes.

---

# 🔍 Microtasks vs Message Queue

There are *two* queues:

### **Microtask Queue**

* `Promise.then`
* `async/await`
* `queueMicrotask`

Runs **before** the normal message queue.

### **Message Queue**

* `setTimeout`
* `setInterval`
* DOM events

### Example:

```js
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");
```

### Output:

```
A
D
C   ← microtask first
B   ← message queue after
```

---

# 🎨 Visual Diagram

```
        ┌──────────────┐
        │  Call Stack   │◀─────────────┐
        └──────────────┘              │
                 ▲                     │
                 │  Event Loop pulls   │
                 │  when stack empty   │
                 │                     │
  ┌───────────────────────┐   ┌──────────────────────┐
  │   Microtask Queue      │   │   Message Queue      │
  │ (Promises, microtasks) │   │ (Timers, events)     │
  └───────────────────────┘   └──────────────────────┘
                ▲                          ▲
                │                          │
        ┌──────────────┐        ┌──────────────────┐
        │   JS Engine   │        │ Browser/Node API │
        │ (main thread) │        │ Timers, fetch... │
        └──────────────┘        └──────────────────┘
```

---

# 🧪 Hands-On Demo

Try predicting this:

```js
console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

Promise.resolve().then(() => {
  console.log("4");
  setTimeout(() => console.log("5"), 0);
});

console.log("6");
```

**Answer:**

```
1
6
3
4
2
5
```

Want me to explain this step-by-step? Just ask!

---

# 👍 Summary

* JS executes synchronous code first (Call Stack).
* Async tasks run in Web/Node APIs.
* Finished async tasks queue callbacks in:

  * **Microtask queue** (priority)
  * **Message queue**
* **Event Loop** moves tasks to the call stack when it’s empty.

---
