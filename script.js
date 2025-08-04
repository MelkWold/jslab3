// Part 1: Fizz Buzz //

for (num = 1; num <= 100; num ++) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("Fizz Buzz")
    } else if (num % 5 === 0){
        console.log("Buzz")
    } else if (num % 3 === 0){
        console.log("Fizz")
    } else {
        console.log(num);
    }
};
console.log("This is the End of Question Number 1---I use this to delineate the questions");

// Part 3: Feeling Loopy
// I need help here.
// Approach:
// What is needed? To store each cell (E.g. ID, Name etc) in a variable. 
//  Step 1: Determine the end of each row using \n and save the output into row
//  Step 2: Obtain each cell using "," and save the output into column

// Question: What tools can I use?
// 1. for loop 
// 2. "for ...in" and "for ...of"
// 3. while loop
// 4. if ..else clause
// 5. Any combination of these?
// 6. Can I use ternary operators? syntax: condition expressionIfTrue:expressionIfFalse

const myStr = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";


let row = "";
for (let char of myStr) {
    if (char !== "\n") {
        row +=  char
        continue
    } else {
        if (char == ",")
        continue
        console.log(row)
    }
    console.log(row)
}

//Another try? One of many
// const myStr = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// let row = "";
// let cell = "";

// for (char of myStr) {
//     for (i =1 ; i ==4; i ++) {
//         if (char !== "\n") {
//             row += char
//             i ++
//             continue
//             console.log(row)
//     }
// }
// };


// Part 2: Prime time
// I would need help here too!

let n = 6;
let sqrtNumber = Math.sqrt(n)

for (let i = n; i >= n; i++) {
    for (let j = 2; j <= sqrtNumber; j++) {
        if (n % j === 0) {
             continue
                } else {
                    console.log (n)
                    break
        }
    }
};



