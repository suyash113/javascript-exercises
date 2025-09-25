function sumofTripleedEvens(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            const triple = nums[i]*3;
            sum += triple;
        }
    }
    return sum;
}
sum1 = sumofTripleedEvens([1,2,3,4,5,6]);
console.log("Sum of the triples of the even numbers is: ", sum1)

function addOne(num) {
    return num + 1
}
// ----------------------------------------------
const arr = [1,2,3,4,5]

const mappedArr = arr.map(addOne);
console.log(mappedArr)

const mappedArr1 = arr.map((num) => num + 1);
console.log(mappedArr1)

// ----------------------------------------------------------

function isOdd(num) {
  return num % 2 !== 0;
}
// const arr = [1, 2, 3, 4, 5];
const oddNums = arr.filter(isOdd);
console.log(oddNums); // Outputs [1, 3, 5];
console.log(arr); // Outputs [1, 2, 3, 4, 5], original array is not affected

// ----------------------------------------------------

// const arr = [1, 2, 3, 4, 5];
const productOfAllNums = arr.reduce((total, currentItem) => {
  return total * currentItem;
}, 1);
console.log(productOfAllNums); // Outputs 120;
console.log(arr); // Outputs [1, 2, 3, 4, 5]
