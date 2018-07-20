import { handleInput } from './anagram';

function initListeners() {
    const input = <HTMLInputElement> document.getElementById('anagram');  
    input.addEventListener('input', handleInput);
}

initListeners();