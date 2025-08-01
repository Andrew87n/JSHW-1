const firstType = prompt("Введіть текст або залишіть рядок порожнім");
const secondType = prompt("Введіть другий текст або залишіть рядок порожнім");
if (firstType === "" || secondType === "") {
  console.log("Не всі поля заповнені");
} else {
  console.log("Обидва поля заповнені");
}

const firstNum = prompt("Введіть число");
const secondNum = prompt("Введіть друге число");
if (firstNum + secondNum > 10) {
    console.log("Сума більша за 10");
} else {
    console.log("Сума менша або дорівнює 10");
}

const userType = prompt("Введіть текст з або без слова JavaScript");
if (userType.includes("JavaScript")){
    console.log("Текст містить слово JavaScript");
} else {
    console.log("Текст не містить слово JavaScript");
}

const num = prompt("Введіть число");
if (10 < num && num < 20){
    console.log("Число входить в діапазон від 10 до 20");
} else {
    console.log("Число не входить в діапазон від 10 до 20");
}

const name = prompt("Введіть ім'я");
const email = prompt("Введіть електронну пошту");
const password = prompt("Введіть пароль");
if (name.length > 3 && email.includes("@.") && password.length > 6){
    console.log("Перенаправлення на іншу сторінку");
} else {
    console.log("Помилка: неправильне заповнення");
}