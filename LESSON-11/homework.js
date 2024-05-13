//TODO: Homework
// =================================================================
1. // Write a function which calculates the average of the numbers in a given list.Note: Empty arrays should return 0.


/*

To find the average:

Add up all the numbers in the set.
Count how many numbers there are in total.
Divide the sum by the total number of numbers.
*/

// SOLUTION:
// let arr = [25, 25, 25]
// function calculateAverage(arr) {
//     if(arr.length === 0) return 0
//     let sum = 0;

//     sum = arr.reduce((collector, number) => {
//         return collector + number;
//     },0)

//     return sum / arr.length
// }

// console.log(calculateAverage(arr));

// ========================================================

2. // The goal is to create a function of two inputs number and power, that "raises" the number up to power (ie multiplies number by itself power times).

// function numberToPower(number, power){
//     if(power === 0) return 1;
//     if(power >= 1) {
//         let result = 1;
//         for(let i=1; i <= power; i++) {
//             result *= number
//         }
//         return result;
//     }
// }

// console.log(numberToPower(3, 2));

// ========================================================

3. // ??


// ========================================================
4. /* Messi goals function 
Messi is a soccer player with goals in three leagues:

* LaLiga
* Copa del Rey
* Champions

Complete the function to return his total number of goals in all three leagues.

Note: the input will always be valid.

*/

// SOLUTION :   

// function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
//     let goalsArr = [laLigaGoals, copaDelReyGoals, championsLeagueGoals];

//     let sum = goalsArr.reduce((collector, goal) => {
//         return collector + goal;
//     }, 0)
//     return `All goals: ${sum}.`
// }
// console.log(goals(5, 6, 7));
// ========================================================
5. // Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love. Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

// SOLUTION:
// function lovefunc(flower1, flower2){
//     if (flower1 % 2 === 0 && flower2 % 2 !== 0) return true;
//     if (flower1 % 2 !== 0 && flower2 % 2 === 0) return true;
//     return false;
// }
// console.log(lovefunc(13, 12));

// ========================================================
6. // Clock shows h hours, m minutes and s seconds after midnight.Your task is to write a function which returns the time since midnight in milliseconds.

/*
h = 0
m = 1
s = 1

result = 61000 

Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59

*/
// SOLUTION:
// function past(h, m, s){
//     let millisecondsPerHour = 3600000;
//     let millisecondsPerMinute = 60000
//     let millisecondsPerSecund = 1000;
//     let msFromMNight = (h * millisecondsPerHour) + (m * millisecondsPerMinute) + (s * millisecondsPerSecund)
//     return msFromMNight;
    
// }
// console.log(past(0,1,1));
// ========================================================
7. //?? In this kata you will create a function to check a non-negative input to see if it is a prime number. The function will take in a number and will return True if it is a prime number and False if it is not. A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.
// SOLUTION:
function isPrime(n) {
    if (n < 0) return `Negative Number`;
    if (n % 1 === 0 && n % n === 0) return true;
    return false;
}
// console.log(isPrime(1));
// ========================================================
8. //



// ========================================================
