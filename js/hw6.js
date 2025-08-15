let counter = 0;
while (counter < 10){
    counter += 1;
    console.log(counter);
}
alert(counter);

for (let i = 0; i <= 20; i += 1){
    if (i % 2 === 1 || i === 0){
        continue
    }
    console.log(i);
}

for (let i = 0; i <= 10; i += 1){
    console.log(`7 x ${i} = ${7*i}`);
}

const n = Number(prompt("Введіть число"));
let number = 0;
while (number <= n){
    number += 1;
    console.log(number);
    if (number === n){
        break
    }
}

let i = 0;
while (i < 20){
    i += 1;
    if (i % 3 === 0){
        continue
    }
    console.log(i);
}