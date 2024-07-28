// Variables

// 2015 öncesi değişken tanımlama
var first_name = 'Eren';
console.log(first_name);

/**
 * DEĞİŞKEN OLUŞTURMA KURALLARI
 * 
 * 1. Anlamlı değişken isimleri kullanılmalı.
 * 2. JavaScript içinde tanımlı ifadelerden değişken isimleri oluşturulmamalı. (Ör: if)
 * 3. Değişken isimleri sayı ile başlamamalı.
 * 4. Değişken isimleri boşluk veya kısa çizgi (-) içermemeli.
 */

/**
 * DEĞİŞKEN İSMİ YAZIM TÜRLERİ
 * 
 * 1. Camel Case: userFirstName
 * 2. Pascel Case: UserFirstName
 * 3. Snake Case: user_first_name
 */

// 2015 sonrası değişken tanımlama
let price = 100;
const product_name = 'Samsung Note 8';
console.log(product_name, price);

price = 200;
product_name = 'Samsung S22';  // TypeError: Assignment to constant variable.
console.log(product_name, price);

// `const` ile tanımlanan değişkenlere yeni değer atanamaz.
