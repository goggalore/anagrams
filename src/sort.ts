export function sort(word: string, dict: Array<string>) {
    const ol = [];

    for (let word2 of dict) {
        const sortedWord = word.split('').sort().join('');
        const sortedWord2 = word2.split('').sort().join('');

        if (sortedWord === sortedWord2) {
            ol.push(word2);
        }
    }

    return ol;
}