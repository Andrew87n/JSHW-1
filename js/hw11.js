const bankAccount = {
    ownerName: "Max", 
    accountNumber: "012 345 67 89", 
    balance: 1000,
    deposit (cash) {
        alert(`На рахунку ${this.balance += cash} грн`);
    },
    withdraw (cash) {
        if (cash > this.balance){
             alert("Недостатньо грошей");
        } else {
        alert(`На рахунку ${this.balance -= cash} грн`);
        }
    }
}
if (confirm("Ви хочете поповнити рахунок?")){
    const money = Number(prompt("Введіть суму для поповнення"));
    if (money > 0 && !isNaN(money)){
        bankAccount.deposit(money);
    } else {
        alert("Невірні дані")
    }
}
if (confirm("Бажаєте зняти кошти?")){
    const money = Number(prompt("Введіть суму яку хочете зняти"));
    if (money > 0 && !isNaN(money)){
        bankAccount.withdraw(money);
    } else {
        alert("Невірні дані")
    }
}

const weather = {
    temperature: Number(prompt("Введіть температуру")),
    humidity: "mild",
    windSpeed: "fast",
    isBelowZero () {
        if (this.temperature > 0){
            return alert("температура вище 0 градусів Цельсія") 
        } else {
            return alert("температура нижче 0 градусів Цельсія")
        }
    }
}
console.log(weather.isBelowZero());

const user = {
    name: "Max",
    email: "user@gmail",
    password: "Max123",
    login (email, password) {
        if(email === this.email && password === this.password){
            console.log("Вхід виконано");
            alert("Вхід виконано")
        } else {
            console.log("Сталася помилка");
            alert("Сталася помилка")
        }
    }
}
user.login("user@gmail", "Max123")

const movie = {
    title: "Max movie",
    director: "Max",
    Year: "2026",
    Rating: 10,
    goodRating () {
        if (this.Rating >= 8){
            return true
        } else {
            return false
        }
    }
}
console.log(movie, movie.goodRating());
