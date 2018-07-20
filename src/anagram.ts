import { dict } from './dicts/dlants';
import { sort } from './sort';

export function handleInput(e: Event) {
    const target = <HTMLInputElement> e.target;
    const word = target.value;
    const output = <HTMLElement> document.getElementById('output');

    dict.then((words) => {
        const anagrams = sort(word, words);
        output.innerHTML = JSON.stringify(anagrams);
    });
}