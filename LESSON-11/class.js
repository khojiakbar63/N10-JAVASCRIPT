let ranNumber = [3, 1, 6, 12, 65, 23, 5];

// FILTER 
// let dec = ranNumber.filter((item) => item >= 10);


// FOREACH
// let dec = [];
// ranNumber.forEach((item) => {
//     if (item >= 10) {
//         dec.push(item)
//         console.log(dec);
//     }
// });



// FOR 
// let dec = [];
// for(let i = 0; i < ranNumber.length; i++) {
//     if(ranNumber[i] >= 10) {
//         dec.push(ranNumber[i]);

//     }
// }

// console.log(dec);


// Wgo has more cars
// let users = [
//     {
//       name: "John",
//       age: 30,
//       country: "UZB",
//       cars: ["BMW", "Mercedes"]
//     },
//     {
//       name: "Bob1",
//       age: 40,
//       country: "USA",
//       cars: ["BMW", "tesla", "volvo"]
//     },
//     {
//       name: "Jane",
//       age: 25,
//       country: "UZB",
//       cars: ["lambo", "rr",  "ferrari", "bugatti"]
//     },
//     {
//       name: "Bob2",
//       age: 40,
//       country: "USA",
//       cars: ["tata", "toyota", "porsche", "ford", "honda"]
//     },
//   ];

// //   let richMan = users.filter((user) => user.cars.length > 3);
// let richMan = users.find((user => user.cars.length > 3));
//   console.log(richMan);



let users = [
    {
      name: "William",
      age: 30,
      country: "UZB",
      cars: ["BMW", "Mercedes"]
    },
    {
      name: "BOb",
      age: 40,
      country: "USA",
      cars: ["BMW", "tesla", "volvo"]
    },
    {
      name: "Jane",
      age: 25,
      country: "UZB",
      cars: ["lambo", "rr",  "ferrari", "bugatti"]
    },
    {
      name: "Nick",
      age: 41,
      country: "USA",
      cars: ["tata", "toyota", "porsche", "ford", "honda"]
    },
  ];

  let userO = users.findIndex(u => u.name.toLowerCase().includes('o'));
  // console.log(userO);

// ___________________________________________________________________________
// return price without vat
function excludingVatPrice(price) {
  if(price === null) return -1
  return +(price / 1.15).toFixed(2)
}

// console.log(excludingVatPrice(230));
// ___________________________________________________________________________
// Sort by age / name
// let workers = [
//   {
//     _id: 1,
//     name: 'Beylie',
//     age: 23
//   },
//   {
//     _id: 2,
//     name: 'Wendall',
//     age: 21
//   },
//   {
//     _id: 3,
//     name: 'Jamie',
//     age: 25
//   },
// ];

// let sortByAge = workers.sort((a, b) => a.age - b.age)

// let sortByName = workers.sort((a,b) => {
//   if(a.name > b.name) {
//     return 3
//   }else{
//     return -3
//   }
// })

// let sortByName = workers.sort((a,b) => a.name.localeCompare(b.name))

// console.log(sortByName);
// console.log(sortByAge);

let fruits = ['kiwi', 'apple', 'banana2', 'ora3nge', 'pear'];

let sortedFruits = +fruits.filter(fruit => /[0-9]/g.test(fruit)).map(i => +i.replace(/[a-z]/g, '')).join('')

// console.log(sortedFruits);
// ___________________________________________________________________________
// every() vs some()

let everyNumbers = [0 , 2, 3, 4, 5];
let every = everyNumbers.every(number => number > 0);
// console.log(every);


let someNumbers = [0 , -2, -3, -4, 5];
let some = someNumbers.some(number => number > 0);
// console.log(some);

// ___________________________________________________________________________
// find() => finds and brings back the first element
// indexOf() => finds and brings back the index of the first element
// let workers = [
//   {
//     _id: 1,
//     name: 'Beylie',
//     age: 23,
//     country: 'UZB'
//   },
//   {
//     _id: 2,
//     name: 'Wendall',
//     age: 21,
//     country: 'USA'
//   },
//   {
//     _id: 3,
//     name: 'Jamie',
//     age: 25,
//     country: 'UZB'
//   },
// ];

// let findUserFromUsa = workers.find(user => user.country === 'USA');
// console.log(findUserFromUsa);


// ___________________________________________________________________________

// findIndex();
// let workers = [
//   {
//     _id: 1,
//     name: 'Beylie',
//     age: 23,
//     country: 'UZB'
//   },
//   {
//     _id: 2,
//     name: 'Ocndall',
//     age: 21,
//     country: 'USA'
//   },
//   {
//     _id: 3,
//     name: 'Jamie',
//     age: 25,
//     country: 'UZB'
//   },
// ];

// let findWorkerIndex = workers.findIndex(worker => worker.name.toLowerCase().includes('o'));
// console.log(findWorkerIndex);

// ___________________________________________________________________________
const products = [
  {name: 'Laptop', price: 500},
  {name: 'Phone', price: 1500},
  {name: 'Air-conditioner', price: 60},
];
products.sort((a, b) => a.price - b.price)
// console.log(products);
// ___________________________________________________________________________

// FIND FLYING FRIEND
let friends = [
  { name: 'Alice', superpower: 'teleportation' },
  { name: 'Bob', superpower: 'super strength' },
  { name: 'Charlie', superpower: 'invisibility' },
  { name: 'Diana', superpower: 'flight' },
  { name: 'Eve', superpower: 'shape-shifting' }
];

let flyingFriend = friends.find(function(friend) {
  if(friend.superpower === 'flight') return friend
});

if(flyingFriend) {
  // console.log(`Oooraa, have a nice sky adventure with ${flyingFriend.name} today.`);
} else {
  // console.log(`Sorry, no adventure.`);
}

// console.log(flyingFriend);
// ___________________________________________________________________________



// ___________________________________________________________________________
