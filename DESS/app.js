// app.js
// We 'import' the specific function we need from the other file
import { createGreeting } from './greetings.js';

const input = document.getElementById('nameInput');
const btn = document.getElementById('greetBtn');
const display = document.getElementById('greetingOutput');

btn.addEventListener('click', () => {
    const name = input.value;
    display.textContent = createGreeting(name);
});