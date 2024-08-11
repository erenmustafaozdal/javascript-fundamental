// String Methods: charAt, toUpperCase, toLowerCase, includes, startsWith, endsWith

let message = 'Merhaba benim adım Eren';
console.log(message);

console.log(message.charAt(0));  // M
console.log(message.charAt(19));  // E

console.log(message.toUpperCase());  // MERHABA BENIM ADIM EREN
console.log(message.toLowerCase());  // merhaba benim adım eren

console.log(message.includes('Eren'));  // true
console.log(message.includes('Mustafa'));  // false
console.log(message.includes('EREN'));  // false

console.log(message.startsWith('M'));  // true
console.log(message.startsWith('Me'));  // true
console.log(message.startsWith('Mer'));  // true
console.log(message.startsWith('Merhaba'));  // true
console.log(message.startsWith('Selam'));  // false

console.log(message.endsWith('n'));  // true
console.log(message.endsWith('en'));  // true
console.log(message.endsWith('ren'));  // true
console.log(message.endsWith('Eren'));  // true
console.log(message.endsWith('Mustafa'));  // false
