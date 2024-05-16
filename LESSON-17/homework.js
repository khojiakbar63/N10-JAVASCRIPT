// TASK:
/*
1. PROMPT ORQALI FOYDALANUVCHIDAN TODO QABUL QILINING ( ZAMETKA)
2. VA UN BILAN BIRGA TODO KIRITILGAN VAQTNI HAM OLING YANI SOAT MINUT VA SEKUND ULARNI OBJECT SIFATIDA SHAKILLANTIRING
{name: “Go to Najot Ta’lim“, time: 12:30:20}
3. TAYYOR BO’LGAN OBJECTNI ARRAYGA SOLIB LOCALSTORAGE GA JOYLANG
4. JOYLANGANDAN SO’NG UNI SHOW TODOS KNOPKA BOSILGANDA EKRANGA CHIQARING
5. TODOLIST dan IDsi ORQALI XOHLAGAN MA’LUMOTNI O’CHIRISH IMKONI BO’LSIN.
6. VAQT BO’YICHA SARTIROVKA QILISH HAM QO’SHILSIN
*/

// TODO LIST
// --------------TO DO LIST--------------
let toDoList = [
    {
        _id: 1,
        todo: "Wake up",
        todoTime: new Date("2024-05-16T08:00:00")
    },
    {
        _id: 2,
        todo: "Go to NT",
        todoTime: new Date("2024-05-13T08:00:00")
    },
    {
        _id: 3,
        todo: "Watch lesson",
        todoTime: new Date("2024-05-17T08:00:00")
    }
];


// ASK USER TO USE NOTES
function addTodo () {
// ASK WHAT AND WHEN TO DO
let todo = prompt("Set task:  ")
let todoTime = prompt("Set time [h:m:s]:  ")

// -----------ADD NEW TODO ITEM--------------
function addToDoList (todo, todoTime) {
    let newTodo = {
        _id: toDoList.length + 1,
        todo,
        todoTime
    }
   
    toDoList.push(newTodo)
    
    showInBrowser ()
    // localStorage.setItem("Todo", JSON.stringify(toDoList))
}
console.log(addToDoList(todo, todoTime));

}
let addBtn = document.getElementById("add-btn");
addBtn.addEventListener('click', addTodo);


// ---------------SHOW TODOS-----------
let showBtn = document.getElementById("show-btn")
showBtn.addEventListener('click', showTodos)

function showTodos () {
    showInBrowser ()
}


// ---------------DELETE TODO-----------
function deleteTodo (delId) {
    delId = prompt("Enter ID: ");
    toDoList = toDoList.filter(todo => todo._id != delId)
    showInBrowser()
}

let delBtn = document.getElementById("delete-btn")
delBtn.addEventListener("click", deleteTodo)


// SORT
function sortByTime () {

    toDoList.sort((a, b) => a.todoTime - b.todoTime)
    showInBrowser ()
}
let sortBtn = document.getElementById("sort-btn");
sortBtn.addEventListener("click", sortByTime)

// IN SYSTEM FUNCTION
function showInBrowser () {
    for(let i = 0; i < toDoList.length; i++) {
        console.log(`
${toDoList[i]._id}: ${toDoList[i].todo} - ${toDoList[i].todoTime}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
    }
}