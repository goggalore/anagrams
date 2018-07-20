export function load(url: string) {
    return fetch(
        url
    ).then(
        (res) => res.text()
    ).then(
        (text) => text.split('\n')
    );
}