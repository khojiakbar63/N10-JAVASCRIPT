// MAP
let names = ["john", "jane", "mike", "sarah"];
let namesUpper = names.map((name) => name.toUpperCase());
let nameCap = names.map((name) => name[0].toUpperCase() + name.slice(1, -1).toLowerCase() + name.slice(-1).toUpperCase())
// console.log(nameCap);


let products = [
    {
        name: "TV",
        price: 300
    },
    {
        name: "iphone",
        price: 1000
    },
    {
        name: "laptop",
        price: 5000
    }
];


let sumProduct = products.map((product) => product.price);
let sum = 0;
sumProduct.forEach(cost => sum += cost)


// console.log(sum);


let users = [
    {
        name: "John",
        age: 30,
        password: "12345678"
    },
    {
        name: "Bill",
        age: 25,
        password: "87654321"
    }
]


let starPassword = users.map(u => {
    u.password = '*'.repeat(u.password.length)
    return u
})
// console.log(starPassword);


// optional chaining

// charAt() for optional chaining
// [0]
// at() can take from end *universal
// slice(-1)
// substring()

// Four important methods
// filter()
// map()
// reduce()
// forEach()