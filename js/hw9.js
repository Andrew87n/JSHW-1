// function logItems(array){
//     for (let i = 0; i < array.length; i++){
//         console.log(`${i + 1} = ${array[i]}`);
//     }
// }
// logItems(["Mango", "Poly", "Ajax"]);

// function calculatEngravingPrice(message, pricePerWord){
// const stringToArray = message.split(" ");
//     console.log(stringToArray.length * pricePerWord);
// }
// calculatEngravingPrice("Напиши скрипт підрахунку вартості гравіювання прикрас", 10);

// function findLongestWord(string){
//     const convertedArray = string.split(" ");
//     let word = convertedArray[0];
//     for (let i = 0; i < convertedArray.length; i++){
//         if (word.lenght < convertedArray[i].length){
//             word = convertedArray[i];
//         }
//     }
//     console.log(word);
// }
// findLongestWord("Mango Poly Ajax");

// function formatString(string){
//     if (string.length <= 40){
//         return string
//     } else {
//         return string.slice(0, 41) + "..."
//     }
// }
// const message = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus ratione cum harum quia, tempora minus pariatur nam natus totam neque doloremque maxime atque animi quis ab ipsa. Debitis, quia!";
// console.log(formatString(message));

// function checkForSpam(message){
//     const lowerMessage = message.toLowerCase()
//     return lowerMessage.includes("spam") || lowerMessage.includes("sale")
// }
// const text = " hi hello sale"
// console.log(checkForSpam(text));

// let input;
// const numbers = [];

// while(true) {
//     input = prompt("Введіть число");
//     if (input === null){
//         alert("Ви нас покинули!");
//       break;
//     }
//     if (isNaN(input)){
//         alert("Введіть число!");
//         continue;
//     }
//     input = Number(input);
//     numbers.push(input);
// }
// if (numbers.length > 0){
//     let total = 0;
//     for (let i = 0; i < numbers.length; i++){
//         total += numbers[i];
//     }
//     console.log(total);    
// }

