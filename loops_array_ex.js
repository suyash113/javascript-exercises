function camelize(str){
    return str
        .split("-") 
        .map((word , index) => index == 0 ? word:word.charAt(0).toUpperCase() + word.slice(1))
        .join("");
}

console.log(camelize("i-am-learning-javascript"));  
// "iAmLearningJavascript"
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// -------------------------------------
// function filterRange(arr, a, b) {
//     let filtered =  arr.filter(num => num >= a && num <= b)
//     return filtered
// }
// console.log(filterRange([5, 3, 8, 1],1,4))

// ---------------------------------------

function filterRangeInPlace(arr, a, b) {
    return arr.filter(num => num >= a && num <= b)
}
let arr1 = [5, 3, 8, 1]
console.log(filterRangeInPlace(arr1,1,4))
console.log(arr1)