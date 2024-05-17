/*Menu task

Restaurant menusi yaratish

1. Menuga ovqat qo’shish funksiyasi bo’lsin object sifatida arrayga solib
2. Localstoragedagi menudagilardan qidirish fuksiyasi
3. Sorting fuksiyasi
4. Narxdan narxgacha filter funksiyasi qo’shing

 */

// LINK BUTTONS TO JS
const showBtn = document.querySelector('#show-btn');
const addBtn = document.querySelector('#add-btn');
const searchBtn = document.querySelector('#search-btn');
// const sortBtn = document.querySelector('#sort-btn');
// const filterBtn = document.querySelector('#filter-btn');

let showZone = document.querySelector('#show-zone');
let menuZone = document.querySelector('#menu');

showBtn.addEventListener('click', showFood);
addBtn.addEventListener('click', addFood);
searchBtn.addEventListener('click', searchFood);
// sortBtn.addEventListener('click', sortFood);
// filterBtn.addEventListener('click', filterFood);

let ALL_DISHES = JSON.parse(localStorage.getItem("Food")) || [];

// CREATE DISH OBJECT
function CreateFood(foodName, foodPrice) {
    this.id = (Math.floor(Math.random() * 1000) + 1).toString().padStart(4, '0')
    this.foodName = foodName;
    this.foodPrice = foodPrice;

}

// SHOW FOOD ???
let showed = true;
function showFood() {
    if(showed = true) {
        // showBtn.innerText = 'HIDE'
        showed = true;
        show = ''

        ALL_DISHES.forEach(food => {
            show += `
                <div class="foods">
                    <h4>${food.foodName}</h4>
                    <span>.....................................</span>
                    <p>$${food.foodPrice}</p>
                </div>
            `
        })
        showZone.innerHTML = show
    } else {
        showed = false;
        showBtn.innerText = 'SHOW'

        show = ''
        ALL_DISHES.forEach(food => {
            show += ``
        })
        // showZone.innerHTML = show

    }
    

}

// ADD DISH TO ALL_DISHES
function addFood() {
    // Get food name and price
    const foodName = prompt('Enter food name: ');
    const foodPrice = prompt('Enter food price: ');
    // Create new food
    const newFood = new CreateFood(foodName, foodPrice);
    ALL_DISHES.push(newFood)

    // Save to local storage
    localStorage.setItem("Food", JSON.stringify(ALL_DISHES))
}


// SEARCH DISH
function searchFood() {
    // Get food name:
    let searchedFoodName = prompt('Enter food name: ');
    // Find food by name:
    let founFood = ALL_DISHES.find(food => food.foodName === searchedFoodName);
    if (founFood) {
    showZone.innerHTML = ""
        // Print food:
        showZone.innerHTML += `${founFood.foodName}  -   ${founFood.foodPrice}`
    } else {
        alert('Food not found')
    }
    // Print food:
    // console.log(founFood);

    showZone.innerHTML += `${founFood.foodName}  -   ${founFood.foodPrice}`

    // showZone.innerHTML = show
    // console.log(ALL_DISHES);
}
