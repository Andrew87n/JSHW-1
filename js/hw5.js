
let message = "";
const coffee = "Кава";
const tea = "Чай";
const juice = "Сік";
const error = "Сталася помилка, спробуйте ще раз";
const option = Number(prompt("1 - кава, 2 - чай, 3 - сік"));
switch (option) {
    case 1:
        message = coffee;
    break;

    case 2:
        message = tea;
    break;

    case 3:
        message = juice;
    break;
    
    default:
        message = error;
    break;
}
console.log(message);
alert(message);

let day = "";
const weekDay = prompt("Введіть номер дня тижня")
if (weekDay >= 1 && weekDay <= 5){
    day = "Введений день - робочий";
} else if ( weekDay > 5 && weekDay < 8){
    day = "Введений день - вихідний";
} else {
    day = "Сталася помилка, спробуйте ще раз";
}
console.log(day);
alert(day);

let month = "";
const chosenMonth = prompt("Введіть номер місяця");
if (chosenMonth > 0 && chosenMonth < 3){
    month = "Пора року - зима";
} else if (chosenMonth > 2 && chosenMonth < 6){
    month = "Пора року - весна";
} else if (chosenMonth > 5 && chosenMonth < 9){
    month = "Пора року - літо";
} else if (chosenMonth > 8 && chosenMonth < 12){
    month = "Пора року - осінь";
} else if (chosenMonth > 11 && chosenMonth < 13){
    month = "Пора року - зима";
} else {
    month = "Було обрано неіснуючий місяць"
}
console.log(month);
alert(month);

let color = "";
const pickColor = prompt("Оберіть колір");
if (pickColor == "червоний"){
    color = "стоп";
} else if (pickColor == "зелений"){
    color = "йти";
} else if (pickColor == "жовтий"){
    color = "чекати";
} else {
    color = "Оберіть інший колір";
}
console.log(color);
alert(color);

let numResult = "";
const num1 = Number(prompt("Введіть число"));
const num2 = Number(prompt("Введіть друге число"));
const integer = prompt("Введіть оператор");
if (integer == "/" && num1 == 0){
    numResult = "Попередження: на нуль ділити неможна"
} else if (integer == "+"){
    numResult = num1 + num2;
} else if (integer == "-"){
    numResult = num1 - num2;
} else if (integer == "*"){
    numResult = num1 * num2;
} else if (integer == "/"){
    numResult = num1 / num2;
} else{
    numResult = "Сталася помилка, спробуйте ще раз";
}
console.log(numResult);
alert(numResult);