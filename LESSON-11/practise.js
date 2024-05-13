// const numbers = [1,23,45,6,7,8,54,54,54,5,4];

// let filtered = numbers.filter(number => number % 2 === 0 && number % 5 === 0);
// console.log(filtered);

// let names = ['Rahul', 'ARaj', 'Ravi', 'Alex', 'Ramesh', 'Rajesh', 'alexjon'];

// let filteredN = names.filter(name => name.includes("Alex"));
// let filteredN = names.filter(name =>  name[0].toLowerCase() === 'a');

// console.log(filteredN);

const students = [
    {
       _id: 1,
       name: "Jack",
       age: 25,
       department: "IT",
       salary: 12000,
    },
    {
       _id: 2,
       name: "Jane",
       age: 19,
       department: "Software Engineering",
       salary: 1000,
    },
    {
       _id: 3,
       name: "Bob",
       age: 21,
       department: "frontend",
       salary: 15000,
    },
    {
       _id: 4,
       name: "Sindor",
       age: 19,
       department: "Frontend",
       salary: 10200,
    },
    {
       _id: 5,
       name: "Farhodbek",
       age: 19,
       department: "Software Engineering",
       salary: 1300,
    },
 ];

//  let ageAbove25 = students.filter(student => student.age < 25);
 let salaryAbove1000 = students.filter(student => 
    student.salary > 1000 && 
    student.department.toLowerCase() === ("frontend"));

//  console.table(salaryAbove1000);

// IMPORTANT
for(let i = 0; i < students.length; i++){
    console.log(`
    ${students[i]._id} ${students[i].name} ${students[i].department} ${students[i].salary}`);
}