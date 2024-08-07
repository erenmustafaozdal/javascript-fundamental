// For In Loop

const obj = {
    name: 'Eren',
    age: 38,
}

for (let key in obj) {
    console.log(`'${key}' anahtarının değeri: ${obj[key]}`);
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let index in numbers) {
    console.log(numbers[index]);
}
