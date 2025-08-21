const array = [6, 37, 41,];
console.log(array);
array[2] += 10;
console.log(array);

const masive = ["j", "s", "i",];
console.log(masive);
masive[3] = "t"; 
console.log(masive);

const array1 = [31, 12, 25, 16,];
const array2 = [24, 1, 35,];
let sumArray = 0;
for (let i = 0; i < array1.length; i += 1){
    sumArray += array1[i];
}
for (let i = 0; i < array2.length; i += 1){
    sumArray += array2[i];
}
console.log(sumArray);

const array3 = [2, 6, 17, 20, 23,];
for (let i = 0; i < array3.length; i += 1){
    console.log(`position name ${i + 1}: value ${array3[i]}`);    
}

const names = ["Олександр", "Ілля", "Марія", "Андрій", "Олена", "Єва", "Дмитро", "Сергій", "Юлія",];
for (let i = 0; i < names.length; i += 1){
    if (names[i].length < 5){
        continue
    }
    console.log(names[i]);
}

const numbers = [12, 47, 5, 88, 63, 29, 94, 31, 56, 72, 6, 18, 40, 67, 81, 25, 90, 14, 38, 53];
let minNumber = numbers[0];
for (let i = 0; i < numbers.length; i += 1){
    if (minNumber < numbers[i]){
        minNumber = numbers[i];
    }
    console.log(minNumber);
}

const nums = [12, 47, 5, 88, 63, 29, 94, 31, 56, 72, 6, 18, 40, 67, 81, 25, 90, 14, 38, 53];
for (let i = 0; i < nums.length; i += 1){
    if (nums[i] % 2 !== 0){
        continue
    }
    console.log(nums[i]);
}