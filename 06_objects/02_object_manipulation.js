// Javascript Manipulation

const user = {
    firstName: 'Eren',
    age: 38,
    isMarried: true,
};

// Ekleme
user.email = 'example@domain.com';
user['phone'] = '+905555555555';
console.log(user);

// Güncelleme
user.isMarried = false;
user.age = user.age + 5;
console.log(user);

// Silme
delete user.age;
console.log(user);
