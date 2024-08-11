// String Methods: Search, IndexOf, lastIndexOf

let message = 'Merhaba benim adım Eren';
console.log(message);

// Eğer bulursa ifadenin başladığı index'i döndürür, bulamazsa -1 döndürür. Regex de kabul eder
console.log(message.search('Eren'));  // 19
console.log(message.search('Mustafa'));  // -1

// Eğer bulursa ifadenin başladığı index'i döndürür, bulamazsa -1 döndürür
console.log(message.indexOf('Eren'));  // 19
console.log(message.indexOf('Mustafa'));  // -1
console.log(message.indexOf('m'));  // 12: benim kelimesindeki m harfi

// Sondan başlayarak eğer bulursa ifadenin başladığı index'i döndürür, bulamazsa -1 döndürür
console.log(message.lastIndexOf('Eren'));  // 19
console.log(message.lastIndexOf('Mustafa'));  // -1
console.log(message.lastIndexOf('m'));  // 17: adım kelimesindeki m harfi
