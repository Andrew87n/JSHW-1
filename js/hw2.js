const celsius = 12;
const fahrenheit = (celsius * 1.8) + 32
console.log(fahrenheit);

const daysInMonth = 30;
const hoursInMonth = daysInMonth * 24;
console.log(hoursInMonth);
const minutesInMonth  =  daysInMonth * 24 * 60;
console.log(minutesInMonth);

const health = 100;
console.log(health);
const energy = 200;
console.log(energy);
const currentHealth = 100 - 37;
console.log(currentHealth);
const currentEnergy = 200 - 76;
console.log(currentEnergy);

const totalPrice = 1890;
const discountedPrice = totalPrice * (1 - 0.1);
console.log(discountedPrice);

const floatNumber = 12.78;
const roundedDown = Math.floor(floatNumber);
console.log(roundedDown);

const floatString = "45.67";
const parsedFloat = Number.parseFloat(floatString);
console.log(parsedFloat);

const intString = "123";
const parsedInt = Number.parseInt(intString);
console.log(parsedInt);

const number = 26;
const sqrtNumber = Math.sqrt(number).toFixed(2);
console.log(sqrtNumber);

const integer = 42;
const stringNumber = "256";
const convertedInt = Number.parseInt(stringNumber);
console.log(convertedInt);
const convertedString = (integer.toString());
console.log(convertedString);
