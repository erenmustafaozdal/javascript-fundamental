// Reference Types: Function (Basics)

// parametresiz fonksiyon
function showMyName() {
    console.log('Benim adım Eren.');
}

showMyName();  // Benim adım Eren.

// parametreli fonksiyon
function showMyName2(name) {
    console.log('Benim adım ' + name + '.');
}

showMyName2('Eren');  // Benim adım Eren.
showMyName2('Sultan');  // Benim adım Sultan.
showMyName2('Zeynep');  // Benim adım Zeynep.

function calcSum(num1, num2) {
    const sum = num1 + num2;
    return sum;
}

const result = calcSum(20, 30);
console.log(result);  // 50
