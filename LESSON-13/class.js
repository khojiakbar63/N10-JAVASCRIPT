// let users = [
//     {
//         age: 30,
//         name: "John"
//     },
//     {
//         age: 40,
//         name: "William"
//     },
// ];


// for(let user of users){
//     for(let key in user) {
//         console.log(user[key], key);
//     }
// }

// let students = ['Jon', 'William', 'Alice'];
// let ages = [23, 40, 18];

// let studentAges = students.map((student, index) => {
//     return {
//         [student]: ages[index]
//     }
// })

// console.log(studentAges);

// function scramble(str, arr) {
//     let res = []
//     for (let i = 0; i < arr.length; i++) {
//         res[arr[i]] = str[i]
//     }
//     return res.join('').split('')
// }

// console.log(scramble('/@$%@', [0, 3, 1, 2]));

// function missingWord(nums, str) {
//     str = str.replace(/ /g, '')
//     nums = nums.sort((a,b) => a-b)
//     let res = '';
//     for(let i = 0; i < nums.length; i++) {
//         res+= str[nums[i]]
//         if(nums[i] > str.length) {
//             return 'No mission today!'
//         }
//     }
//     return res.toLowerCase()
// }
// let res = missingWord([5, 0, 3], 'I love you');
// console.log(res);

// let arr = [1,23,4];
// console.log(Math.max(...arr));

// let extraInfo ={
//     location: 'Tashkent',
//     birthDate: '10/041998'
// }

// let user = {
//     name: 'Khojiakbar',
//     age: 26,
//     ...extraInfo
// }
// console.log(user);


// let newStr = [..."google"]
// console.log(newStr);

// let str = 'Hello';

// console.log(str.indexOf('o'));
// console.log(str.search('o'));

// console.log('Hello'.substring());
// console.log('Hello'.substr(-1));

let fruits = ['apple',  'banana', 'peach'];

let users = [
    {
        name: "Akbar",
        country: "Uzbekistan",
        age: 33,
    },
    {
        name: "Bobur",
        country: "Uzbekistan1",
        age: 24,
    },
    {
        name: "Dilshod",
        country: "Uzbekistan1",
        age: 22,
    },
    {
        name: "JohnVaJack",
        country: "Uzbekistan1",
        age: 21,
    },
    
];
// for(let i = 0; i < users.length; i++) {
//     if(users[i+1]){
//         let difference = users[i].age - users[i+1].age
//         if(difference < 0) {
//             console.log(`${users[i].name} is smaller than ${users[i+1].name} by ${Math.abs(difference)}.`);
//         }else{
//             console.log(`${users[i].name} is older than ${users[i+1].name} by ${Math.abs(difference)}.`);
//         }
//     }
// }
let dif = users[users.length - 1].age - users[0].age
// console.log(dif);
// console.log(`${users[users.length - 1].name} ${users[0].name}dan ${Math.abs(dif)} yosh ${dif < 0 ? "kichik" : "katta" }.` );

// console.log("-----");
// console.log(user['name']);

// for(let key of fruits) {
//     console.log(key);
// }

// let numbers = [1,2,3,4,5,6,7,8,9,0];

// numbers.fill("#", 0, 2).fill('*', numbers.length - 3 )

// console.log(numbers+'');


// let res = Array(8).fill('⭐︎')

// for(let star of res){
//     document.write(star)
// }

// let cardNumber = "4073 4200 4811 2159".split('')
// let result = [];
// for(let i = 0; i < cardNumber.length; i++){
//     if(cardNumber[i] == ' '){
//         result += '-'
//     }
//     else if(i >= 2 && i <= 16) {
//         result += '*'
//     }
//     else {
//         result += cardNumber[i]
//     }
// }
// console.log(result);

// LOCAL STORAGE