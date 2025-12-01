// function square(s) {
//     return `square of ${s} is ${s*s}`
// }
// const out1 = square(5)
// console.log(out1)   

function add7 (num) {
    return num + 7
}

const out1 = add7(10)
console.log(out1)

function multiply (n1, n2) {
    return n1*n2
}

const out2 = multiply(3, 2)
console.log(out2)

function capitalize(str1) {
    return str1.charAt(0).toUpperCase() + str1.slice(1).toLowerCase()
}

const out3 = capitalize("abCd")
console.log(out3)

function lastLetter(str2) {
    return str2.charAt(str2.length-1)
}

const out4 = lastLetter("abcd")
console.log(out4)