// const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
// const words = ["кіт", "собака", "миша", "папуга", "хомяк"];

// function countItems(array, condition){
//     let count = 0;
//     for (let i of array){
//         if (condition(i) === true){
//             count ++;
//         }
//     }
//     return count
// }

// const isEven = num => num % 2 === 0;
// const isLarge = num => num > 10;
// const isShort = word => word.length <= 3;

// console.log("Парних чисел:", countItems(numbers, isEven));
// console.log("Чисел більше 10:", countItems(numbers, isLarge));
// console.log("Коротких слів:", countItems(words, isShort));


// const calculate = (a, b, operation) => operation(a, b);

// const add = (a, b) => a + b;

// const subtract = (a, b) => a - b;

// const multiply = (a, b) => a * b;

// const divide = (a, b) => {
//     if (b !== 0){
//         return a / b;
//     } else {
//         return "error"
//     }
// }

// console.log(calculate(10, 5, add));
// console.log(calculate(10, 5, subtract));
// console.log(calculate(10, 5, multiply));
// console.log(calculate(10, 5, divide));
// console.log(calculate(10, 0, divide));



// const messagePlaceholder = message => {
//     message = prompt("Введіть повідомлення");
//     return message
// }

// function repeatMessage(times, messageCreator){
//     let newMessage = "";
//     for (let i = 0; i <= times - 1; i ++){
//        newMessage = messageCreator(i);
//        console.log(newMessage);
//     }
// }

// console.log(repeatMessage(4, messagePlaceholder));
