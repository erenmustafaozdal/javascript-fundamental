// Logical Operators

/**
 * and(&&): ve
 * or(||): veya
 * not(!): değil
 */

let price = 10;

console.log(price > 5 /* true */ && price < 15 /* true */);  // true
console.log(price > 10 /* false */ && price < 15 /* true */);  // false

console.log(price > 5 /* true */ || price < 15 /* true */);  // true
console.log(price > 10 /* false */ || price < 15 /* true */);  // true

console.log(!(price > 5 /* true */));  // false
console.log(!(price < 5 /* false */));  // true
