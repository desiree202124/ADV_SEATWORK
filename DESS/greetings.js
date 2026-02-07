// greetings.js

// We use 'export' so this function is accessible outside this file
export function createGreeting(name) {
    if (!name) return "Hello, Stranger!";
    return `Hello, ${name}!`;
}