'use strict'; // переключает движок в «современный» режим, изменяя поведение некоторых встроенных функций. нужно ставить в начале скрипта
// вместо всего скрипта "use strict" можно поставить в начале большинства видов функций. 
// Это позволяет включить строгий режим только в конкретной функции. Но обычно используют его для файла.

//bdd - behavioour driven development подход к разработке
//chai - библиотека для проверок
//sinon - close to previous

//Babel - транспиллер. Превращает современный js в старый стандарт

//ВАРИАНТЫ ПОДКЛЮЧИТЬ К ДОКУМЕНТУ: inline (прям атрибутом) -- internal -- external 

// <script ASYNC></script> - оба атрибута говорят не прерывать загрузку страницы при выполнении
// <script DEFER></script> - отличается тем, что просит выполнить скрипт после загр страницы
// несколько скриптов с такими тегами будут выполняться подряд

//JS игнорирует несколько пробелов
//лучше лишний раз не делать глобальную переменную, а локальную

alert("popup message");
prompt("type here:");
confirm("are you sure?"); // модальные окна

//BOM - обзектная модель браузера. Окна/выпадайки/переходы/
//DOM - объектная модель документа. Все элемены и все их свойства
console.dir(document)// в консоли пишешь DOM получаешь


// HOISTING -поднятие. Инициализация для declared функций и var переменных ДО выполнения кода. var - undefined до момента 
//объявления в коде, но она уже будет существовать!
console.log(varry); //undefined
var varry = 2;

//LET VAR LET VAR LET VAR LET VAR LET VAR LET VAR LET VAR LET VAR CONST
//LET VAR LET VAR LET VAR LET VAR LET VAR LET VAR LET VAR LET VAR CONST
var aaa; // видна во всей функциии. Видна всегда, даже до объявл (абзац выше)
let bbb; //видна только в своем {блоке} Видна после объявления, до - ReferenceError: letName is not defined. 

//let нельзя объявить повторно в том же блоке или функции. Это приведет к выбросу исключения SyntaxError.
if (x) {
  let foo;
  let foo; // SyntaxError thrown.
} 

var a = 5;
var b = 10;
if (a === 5) {
  let a = 4; // The scope is inside the if-block
  var b = 1; // The scope is inside the function
  console.log(a);  // 4
  console.log(b);  // 1
} 
console.log(a); // 5
console.log(b); // 1

switch (x) {
    case 0:
      let foo;
      break;
    case 1:
      let foo; // Выброс SyntaxError из-за повторного объявления переменной, тут var подойдёт
      break;
}

// можно использовать ключевое слово let для привязки переменных к локальной области видимости цикла for. 
// Разница с использованием var в заголовке цикла for, заключается в том, что переменные объявленные var, будут видны во всей функции, в которой находится этот цикл.
var i=0;
for ( let i=i ; i < 10 ; i++ ) {
  console.log(i);
}

//let, в отличии от var, не создает свойства на глобальном объекте. Например:
var x = 'global_x';
let y = 'global_y';
console.log(this.x); // 'global_x'
console.log(this.y); // undefined

//const
const MY_FAV = 7;

MY_FAV = 20; //Uncaught TypeError: Assignment to constant variable

const MY_FAV = 20; //Uncaught TypeError: Assignment to constant variable

// имя MY_FAV зарезервированно константой выше, данная операция выкинет исключение. let - так же
var MY_FAV = 20;

if (MY_FAV === 7) { // Важно отметить свойства области видимости уровня блока
    // Всё нормально. Создать константу или переменную MY_FAV можно. 
    // (работает так же как и let при объявлении в блоке переменных, которые не const)
    const MY_FAV = 20;

    // MY_FAV теперь 20
    console.log("my favorite number is " + MY_FAV);

    // это попадёт в глобальный контекст и выдаст ошибку
    var MY_FAV = 20;
}

///////////////////
//Лиетал - фиксир значения объявления: "string"  {value: 1}   [1, 2, 3]
// string value:1  1,2,3 - значения

//область видимости - scope

//ЧЕ ЭТО
document.body.appendChild(info);
document.body.appendChild(list);