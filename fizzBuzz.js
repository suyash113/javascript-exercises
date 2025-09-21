// n = int(input("Enter a number: "))
// count = 1
// for i in range(1, n+1):
//     if i % 3 == 0 and i % 5 == 0:
//         print("FizzBuzz")
//     elif i % 5 == 0:
//         print("Buzz")
//     elif i % 3 == 0:
//         print("Fizz")
//     else:
//         print(count)
//     count += 1

let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for (let i = 1; i <= answer; i++){
    if (i%3 === 0 && i%5 === 0) {
        console.log("FizzBuzz")
    }
    else if (i%3 === 0) {
        console.log("Fizz")
    }
    else if (i%5 === 0) {
        console.log("Buzz")
    }
    else {
        console.log(i)
    }
}