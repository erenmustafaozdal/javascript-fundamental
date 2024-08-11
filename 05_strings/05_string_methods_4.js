// String Methods: slice, subString

// string verisinin bir parçasını alır
let message = 'Merhaba benim adım Eren';
console.log(message.slice(0, 7));  // Merhaba
console.log(message.slice(19, 23));  // Eren
console.log(message.slice(14));  // adım Eren (index'ten sonrasını alır)
console.log(message.slice());  // Merhaba benim adım Eren (tamamını alır)
console.log(message.slice(0));  // Merhaba benim adım Eren (tamamını alır)
console.log(message.slice(-4));  // Eren
console.log(message.slice(-4, -1));  // Ere

// string verisinin bir parçasını alır
console.log(message.substring(0, 7));  // Merhaba
