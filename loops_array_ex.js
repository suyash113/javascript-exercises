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
// -----------------------------------------------
function sortDecrese(arr2) {
    arr2.sort((a, b) => b - a)
    return arr2
}
arr2 = [5, 2, 1, -10, 8]
console.log(sortDecrese(arr2))
// --------------------------------

// function copySorted(arr3) {
//     let sorted = arr3
//     sorted.slice().sort();
//     return sorted
// }
// let arr3 = ["HTML", "JavaScript", "CSS"];
// console.log(copySorted(arr3))

function copySorted(arr) {
  return arr.slice().sort();
}

let arr3 = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr3);

console.log(sorted)
console.log(arr3)
// -----------------------------------------

function unique(arr) {
    let unique = []
    for (let str of arr) {
        if (!unique.includes(str)) {
            unique.push(str)
        }
    }
    return unique
  }
  
  let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];

  console.log(unique(strings))