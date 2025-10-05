const user = {
    name: "Max",
    age: 26,
    mood: "Neutral",
    hobby: "snorkeling",
    premium: true,
}
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;
const key = Object.keys(user);
for (const x of key){
    console.log(`${x}: ${user[x]}`);
}

const user1 = {
    name: "Max",
    age: 26,
    mood: "Neutral",
    hobby: "snorkeling",
    premium: true,
}
const countProps = function (obj) {
    const key = Object.keys(obj);
        console.log(key.length);
}
console.log(countProps(user));

const people = {
    Ostap: 38,
    Mary: 16,
    Max: 50,
    Zack: 22
}
const findBestEmployee = function (employees)  {
    const value = Object.values(employees);
    const maxValue = Math.max(...value);
    for (const key in employees){
        if (employees[key] === maxValue){
            return key
        }
    }
}
console.log(findBestEmployee(people));

const employees = {
    Ostap: 100,
    Mary: 1200,
    Max: 14000,
    Zack: 150
}

function countTotalSalary (array) {
    const value = Object.values(array);
    let sum = 0;
    for (const key of value){
        sum += key
    }
    return sum
}
console.log(countTotalSalary(employees));

const products = [
    {name: "apple", price: 50, category: "fruits"},
    {name: "carrot", price: 20, category: "vegetables"},
    {name: "banana", price: 30, category: "fruits"},
    {name: "potato", price: 15, category: "vegetables"},
];
function getAllPropValues (arr, prop) {
    const emptyArr = []
    for (const product of arr){
        if (prop in product){
            emptyArr.push(product[prop])
        }
    }
    return emptyArr
}
console.log(getAllPropValues(products,"category"));

const items = [
    {name: "apple", price: 50, quantity: 5},
    {name: "carrot", price: 20, quantity: 10},
    {name: "banana", price: 30, quantity: 7},
    {name: "potato", price: 15, quantity: 20},
];
function calculateTotalPrice (allProducts, productName) {
    for (const product of allProducts){
        if (product.name === productName){
            return product.price * product.quantity
        }
    }
    return 0
}
console.log(calculateTotalPrice(items, "banana"));
console.log(calculateTotalPrice(items, "cherry"));
