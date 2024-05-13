const db = [
    {
        _id: 1,
        name: 'John',
        age: 25,
        email: 'john@example.com',
        password: '123456',
    },
    {
        _id: 2, 
        name: 'Jane',
        age: 30,
        email: 'jane@example.com',
        password: '654321',
    },
    {
        _id: 3,
        name: 'Bob',
        age: 35,
        email: 'bob@example.com',
        password: 'abcdef',
    }
];



function User(db) {
    this.db = db;
    // Display all users:
    this.displayAllUsers = function() {
        this.db.forEach(user =>{
            console.log(
        `
        ID: ${user._id}
        Name: ${user.name}
        Age: ${user.age}
        Email: ${user.email}
        ------------------------
        `
            );
        })  
    }
    // Display user info:
    this.displayUserInfo = function(userID) {
        const user = this.db.find(user => user._id === userID);

        console.log(`
        Name: ${user.name}
        Email: ${user.email}
        Password: ${user.password.replace(/./g, '*')}
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
        
    };
    // Add user:
    this.addUser = function(name, age, email, password) {
        const newUser = {
            _id: this.db.length + 1,
            name,
            age,
            email,
            password,
        }
        this.db.push(newUser);
        console.log(`${newUser.name} is being added to database.`)
    }
    // Remove user:
    this.removeUser = function(userID) {
        const db = this.db.filter(user => user._id != userID)
        console.log(db);
    }
    
}


const user = new User(db)
user.addUser('Khojiakbar', 26, 'hojiakbar7796@mail.ru', '1111')
user.removeUser(1)