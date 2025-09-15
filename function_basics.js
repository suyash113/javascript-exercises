function add7(num) {
    const a = num + 7;
    return a;
}
console.log(add7(3));

function multiply(a, b) {
    const c = a*b
    return c
}
console.log(multiply(2, 5))

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
console.log(capitalize("suyash"));

function lastLetter(text) {
    return text.charAt(text.length - 1)
}
console.log(lastLetter("abcd"))