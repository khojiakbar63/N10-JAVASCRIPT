// const  saveBtn = document.querySelector("#save-btn");
// const  addBtn = document.querySelector("#save-btn");

// let user = {
//     name: "John",
//     age: 30,
//     hobbies: ["reading", "painting", "coding"]
// };

// saveBtn.addEventListener("click", function() {
//     localStorage.setItem("user", JSON.stringify(user));
// });

// addBtn.addEventListener("click", function() {
//     alert("Add new user:")

//     let id = prompt("Enter user ID:");
//     let name = prompt("Enter user name:");
//     let username = prompt("Enter user username:");
//     let email = prompt("Enter user email:");

//     let newUser = {
//         id: +id,
//         name: name,
//         username: username,
//         email: email
//     }
// })



// Task 1:

// let productPrices = [300, 400, 700, 500];
// let discounts = [20, 10, 40, 15];

// productPrices.map((price, index) => {
//     let discounted = price - (price * discounts[index] / 100);
    // console.log(`${price} - ${discounted}`);
// })

// let totalPrice = 0;

// for (let i = 0; i < productPrices.length; i++) {
//     totalPrice += productPrices[i] - (productPrices[i] * discounts[i] / 100);
//     console.log(totalPrice);
// }

// Task 2: Find car with hybrid engine not gas
// let cars = [
//     {
//         id: 1,
//         name: "BMW",
//         price: 100,
//         engine: ["one", "two", "three", "four", "hybrid"]
//     },
//     {
//         id: 2,
//         name: "Mercedes",
//         price: 200,
//         engine: ["one", "two", "gas", "hybrid"]
//     },
//     {
//         id: 3,
//         name: "Audi",
//         price: 300,
//         engine: ["one", "two", "three", "four", "five", "six", "gas"]
//     },
//     {
//         id: 2,
//         name: "Wolkswagen",
//         price: 200,
//         engine: ["one", "two", "hybrid", "gas"]
//     },
// ];
// let searchCar = cars.findLast((car) => car.engine.includes("hybrid") && !car.engine.includes("gas"))
// // console.log(searchCar);

// // Task 3
// let user1 = {
//     name: "William",
//     username: "will",
//     address: {
//         lat: "noth345",
//         long: "est347"
//     }
// }

// Save to localstorage
// localStorage.setItem("user1", JSON.stringify(user1))


// add lat and long and console it
// let person = JSON.parse(localStorage.getItem("user1"))
// let lat = person.address.lat = "north345";
// let long = person.address.long = "east347";
// let regex = /[0-9]/g
// let resLat = +lat.match(regex).join('')
// let resLong = +long.match(regex).join('')
// console.log(resLat + resLong);


// let loginBtn = document.querySelector("#login-btn");
// let registerBtn = document.querySelector(".register-btn");
// let heading = document.querySelector("h2");
// console.log(heading);

// // const btn = document.querySelector("button");
// console.log(btn);

// const btn = document.querySelector("button[type='submit']");

// console.log(text);

// const smallTexts = document.getElementById("pagehide")
// console.log(smallTexts);

// const smallTexts2 = document.getElementsByClassName("small-text")
// console.log(smallTexts2);

// const spanElements = document.getElementsByTagName("span")

