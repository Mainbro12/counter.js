
// let userName = "Ivan";
// function showMessage (){
//     userName = "Bodya";
//     let message = "Гавкає," + userName;           ( Зміна функції )
//  alert (message);
// }
// alert (userName);
// showMessage ();
// alert (userName);

// function showMessage(text) {
//   // ...

//   if (text === undefined) { // якщо параметр відсутній
//     text = 'ВИВІД ЛЮБОГО ТЕКСТУ';
//   }

//   alert(text);
// }

// showMessage(); // порожнє повідомлення

//  function checkAge(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return confirm('У вас є дозвіл ваших батьків?');
//   }
// }

// let age = prompt('Скільки років тобі?', 18);

// if ( checkAge(age) ) {
//   alert( 'У доступі надано' );
// } else {
//   alert( 'Доступ відмовленно' );


// function checkAge(age) {                                   Нижче будуть приклади де той же приклад з операторами 
//   if (age > 18) {                                                                      ? та || 
//     return true;
//   } else {
//     return confirm('Батьки дозволили?');
//   }
// }



// function checkAge(age) {
//   return (age > 18) ? true : confirm('Батьки дозволили?');                  оператор:  " ? ""
// }


// function checkAge(age) {
//   return (age > 18) || confirm('Батьки дозволили?');                        оператор: " || "
// }

//  let sayHi = function () {
//    alert( "Привіт" );                               // Функція всередині виразу
//  };
//  sayHi ();             .Це викликає функцію.


// function ask (question, yes, no) {                   question - текст запитання
//     if (confirm(question)) yes()
//         else no ()
// }
// function showOk () {
//     alert ('Ви погодились на пропозицію')
// }
// function showCancel() {
//     alert ('Ви скасувались від пропозиції');
// }
// ask ('Ви згодні прийняти цю пропозицію?', showOk, showCancel);


// function ask(question, yes, no) {                            // коротший варінат
//   if (confirm(question)) yes()
//   else no();
// }
// ask(
//   "Ви згодні?",
//   function() { alert("Ви погодились."); },
//   function() { alert("Ви скасували виконання."); }
// );

// sayHi("Іван"); // Привіт, Іван               // глобальне оголошення в будь якому місці скрипта
// function sayHi(name) {
//   alert( `Привіт, ${name}` );
// }

// let age = prompt("Скільки вам років?", 18);



// 1. створити змінну числа 

let count = 0;

// 2. написати фунцію додавання віднімання

function minus ()  {
    count = count-1;
    if (count < 0) {
    count = 0;
    }
    countdiv.textContent= count;
}
function plus () {
    count = count+1;
    if (count > 100)
        count = 100;
countdiv.textContent= count;
}
function plusTen () {
    count = count+10;
    if (count > 100)
        count = 100;
countdiv.textContent= count;
}
function reset () {
    count = 0;
    countdiv.textContent= count;

}

// 3. Дістати елемент кнопки за класом
const addButton = document.getElementById("add-button")
const countdiv = document.getElementById("count")
const minusButton = document.getElementById("minus-button")
const resetButton = document.getElementById("reset-button")

countdiv.textContent= count;

addButton.addEventListener('dblclick', plusTen)
addButton.addEventListener('click', plus)
minusButton.addEventListener('click', minus)
resetButton.addEventListener('click', reset)

// 4. написати перевірку шоб макс число не перевищувало 10, мін 0



// let user = {
//     name: "Vanya",
//     age: 15,
//     num: 380986581725,
// }
// alert( user.name);
// alert( user.age);
// alert( user.num);
// user.isAdmin = true; // булеве значення
// delete user.age; // щоб видалити властивіть наприклад age

// let user = {
//   name: "Іван",
//   age: 30,
//   number: 380407658765,
// };

// let key = prompt ("Що ви хочете знати про користувача?");
// alert (user[key]);

// function makeUser(name, age) {
//     return {
//         name: name,
//         age: age,
//     };
// }
// let user = makeUser('Ivan', 32,);
// alert(user.name);



// function makeUser(name, age) {
//   return {
//     name,                        // те ж саме, що name: name
//     age,                         // те ж саме, що age: age
    
//   };
// }

// let user = { name: "Іван", age: 30 };

// alert( "age" in user ); // true, user.age існує
// alert( "blabla" in user ); // false, user.blabla не існує
// let obj = {
//     test: undefined
// };
// alert (obj.test); // виведеться undefined, значить властивість не існує?
// alert ("test" in obj); // властивість існує


// let user = {
//     name: 'Ivan',
//     age: 55,
//     isAdmin: false,
// };
// for (let key in user) {
//     alert (key);
//     alert (user [key] );
//}


// let codes = {
//     '1': 'USA',
//     "41": 'Switzerland',
//     "44": 'UK',
//     "49": 'Germany',
// };
// for(let code in codes) {
//     alert(code)
// }

// let solaries = {                        // додавання зарплати //
//     John: 100,
//     Anna: 150,
//     Petro: 90
// };
// let sum = 0;
// for (let key in solaries) {
//     sum += solaries[key];
// };

// alert(sum)


//  різні типи значень
// let arr = [
//   'Яблуко',
//   { name: 'Микола' },
//   true,
//   function() { alert('привіт'); }
// ];

// // отримати елемент з індексом 1 (об'єкт) та вивести його властивість name
// alert( arr[1].name ); // Микола

// // отримати елемент з індексом 3 (функція) та виконати її
// arr[3](); // привіт


// let fruits = [ 'яблуко', 'груша', 'апельсин', 'банан', 'лайм']
// // alert (fruits[fruits.length -1])                                //виводить останній елемент//
// alert (fruits.at(-1))                                                 // коротший варіант//



// let fruits = ['Яблуко', 'Апельсин', 'Груша'];
// alert (fruits.pop() );                             // pop - видаляє елемент з масиву (з кінця) та виводить його
// alert (fruits);


// let fruits = ['Яблуко', 'Апельсин', 'Груша']
// fruits.push ("Лайм");                             // push - додає елемент в масив (в кінець)
// alert (fruits);         


// let fruits = ['Яблуко', 'Апельсин', 'Груша']
// alert (fruits.shift () );                        // shift - видаляє елемент з масиву (з початку) та виводить його
// alert (fruits);


// let fruits = ['Яблуко', 'Апельсин', 'Груша']
// fruits.unshift ('Лайм');                        // unshift - додає елемнт в початок масиву
// alert (fruits);


//  let fruits = ["Яблуко", "Апельсин", "Слива",]
//  for (let fruit of fruits)                       // Цикли - все в масиві по порядку
//      alert (fruit);  

// let arr = ["Яблуко", "Апельсин", "Груша"];


//  let arr = ["I", "Stude", "javaScript"];
//  arr.splice (1, 1);                               // з Індексу 1 видалимо 1 елемент
//  alert(arr);

// let arr = ['I', "Stude", "javaScript", 'right', 'now'];
// arr.splice (0, 3, "Rock-n-Roll", "Stude");        // видалимо 3 перших елементи і замінимо їх іншими
// alert(arr)                                         

// let arr = ["I", "study", "JavaScript"];
// // починаючт з індекса 2
// // видалимо 0 елементів
// // ваставити "complex" та "language"
// arr.splice (2, 0, "Rock-n-Roll", "English")
// console.log(arr)



// ["Bilbo", "Gandalf", "Nazgul"].forEach(alert);       // для кожного елементу викликається alert

// let fruits = ['Яблуко', 'Orange', 'Apple']

// alert( fruits.indexOf('Apple') );             // 0 (перший Apple)                  //indexOf - шукає елемент
// alert( fruits.lastIndexOf('Яблуко') );         // 0 (останній Яблуко)       //lastIndexof - шукає але з ліва на право


// let result = arr.find(function(item, index, array) {\          // Find (Синтаксис)

// });



// let users = [
//   {id: 1, name: "John"},
//   {id: 2, name: "Pete"},                   
//   {id: 3, name: "Mary"},
//   {id: 4, name: "John"}
// ];

 // Знайдемо індекс першого John 
// alert(users.findIndex(user => user.name == 'John')); // 0                           // findIndex (Зліва направо)                                                                             
// alert(users.findLastIndex(user => user.name == 'John')); // 3                         // findLastIndex (Зправа наліво)



//  let result = arr.map(function(item, index, array) {              //arr.map  (Синтаксис)
//  }); 

// let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
// alert(lengths); // 5,7,6
  

// const numbers = [10,3,8,1,4,42,0];
// numbers.sort ( (a, b) => a-b );                 // сортування масиву по зростанню
// console.log (numbers);



const numbers = [1,2,7,12,48,52];
let result = numbers.reduce((sum, current) => sum + current, 0);

alert(result);



