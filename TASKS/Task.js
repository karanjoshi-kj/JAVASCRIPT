//! MICRO AND MACRO TASK 

//! 1. Macrotasks (Task Queue)
//? Macrotasks represent discrete, independent units of work. The event loop runs one macrotask from the queue, and once it finishes, it renders the UI (if needed) before moving on to the next macrotask.

//! Examples:
//? setTimeout and setInterval
//? setImmediate (Node.js)
//? I/O operations (e.g., network requests, file system)
//? UI rendering and DOM events (e.g., click, resize)



//! 2. Microtasks (Microtask Queue / Job Queue)
//? Microtasks are smaller, high-priority tasks that usually result from actions executed in the current script (e.g., promises resolving). The key rule: The microtask queue is fully emptied after every single macrotask finishes, and before the browser renders or moves to the next macrotask.

//! Examples:
//? Promise.prototype.then() / catch() / finally()
//? queueMicrotask()
//? MutationObserver (monitoring DOM changes)
//? await execution (behind the scenes)


console.log("1. Script start (Synchronous)");

// Macrotask 1
setTimeout(() => {
    console.log("4. setTimeout executed (Macrotask)");
}, 0);

// Microtask 1
Promise.resolve().then(() => {
    console.log("3. Promise resolved (Microtask)");
});

console.log("2. Script end (Synchronous)");