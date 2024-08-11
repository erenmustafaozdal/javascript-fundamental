// String Methods: toString, Concat, split

// veriyi string verisine dönüştürü
let temp = 123;
console.log(typeof temp.toString(), temp.toString());
let temp2 = false;
console.log(typeof temp2.toString(), temp2.toString());
let temp3 = [1, 2, 3, 4];
console.log(typeof temp3.toString(), temp3.toString());

// string verilerini birleştirir
let m1 = 'Merhaba';
let m2 = ' benim adım';
let m3 = ' Eren';
let x1 = m1.concat(m2, m3);
console.log('x1: ', x1);
let x2 = m1.concat(m2).concat(m3);
console.log('x2: ', x2);
let x3 = m1 + m2 + m3
console.log('x3: ', x3);

// string verilerini ayırır
let message = 'Merhaba benim adım Eren';
console.log(message.split(' '));
