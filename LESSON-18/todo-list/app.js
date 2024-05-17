// LINKING HTML ELEMENTS
const addBtn = document.querySelector('#add-btn');
const showBtn = document.querySelector('#show-btn');
const deleteBtn = document.querySelector('#delete-btn');
const sortBtn = document.querySelector('#sort-btn');
const result = document.querySelector('#result');


// CREATE NEW OBJECT
function NewTodo(newTodoName, hours, minutes, seconds, time) {
    this.id = (Math.floor(Math.random() * 100000) + 1).toString().padStart(6, '0') 
    this.name = newTodoName,
    this.hours = hours.toString().padStart(2, "0"),
    this.minutes = minutes.toString().padStart(2, "0"),
    this.seconds =  seconds.toString().padStart(2, "0")
    this.time = time.toString()
}   

let ALL_TODOS = JSON.parse(localStorage.getItem("Todos")) || [];

// ADD TODO FUNCTION
const addNewTodo = function () {
    // Get todo name from user
    let newTodoName = prompt('Enter new todoname:');

    // Check if todo name is empty
    if(newTodoName && newTodoName.trim() !== '' ) {
        // Get current date
        let date = new Date()
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let seconds = date.getSeconds()
        let time = date.getTime()

        // Create new todo
        let newTodoResult = new NewTodo(newTodoName, hours, minutes, seconds, time)
        ALL_TODOS.push(newTodoResult)

        // Save todo to local storage
        localStorage.setItem("Todos", JSON.stringify(ALL_TODOS))
    }else {
        alert("Please enter a todo name!")
    }

}

// SHOW TODOS FUNCTION
const showTodos = function () {
    result.innerHTML = ''
    ALL_TODOS.forEach(todo => {
        result.innerHTML += `
        <div class="todo-item">
            <span>${todo.id}</span>
            <h2>${todo.name}</h2>
            <span>${todo.hours}:${todo.minutes}:${todo.seconds}</span>
        </div>
        `
    })
}

const deleteTodo = function () {
    let deleteId = prompt('Enter todo id:')
    
    if (deleteId) {
        let newTodos = ALL_TODOS.filter(todo => todo.id !== deleteId)
        ALL_TODOS = newTodos
        localStorage.setItem("Todos", JSON.stringify(newTodos))
    }
}

let sorted = false;
const sortTodo = function () {
    if(sorted === false) {
        sorted = true;
        ALL_TODOS.sort((a, b) => {
            if(a.time > b.time) {
                return -1
            }else {
                return 1
            }
        })
    }else {
        sorted = false
        ALL_TODOS.sort((a, b) => {
            if(a.time > b.time) {
                return 1
            }else {
                return -1
            }
        })
    }
    
   showTodos()
}
// ADD TODO EVENT
addBtn.addEventListener('click', addNewTodo)
showBtn.addEventListener('click', showTodos)
deleteBtn.addEventListener('click', deleteTodo)
sortBtn.addEventListener('click', sortTodo)