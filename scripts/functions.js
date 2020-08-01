'use strict';

// ФУНКЦИЯ - ОБЪЕКТ!

function DECLARATIONfunction () { 
    let privet = "hello";
    return privet;
} 
//объявление функции
// сработает и до и после объявления. hoisting(поднятие) над всем исполняемым
let privetFromFunction = DECLARATIONfunction();


let EXPRESSIONfunction = function () {
    let beef = new Object();
}; // точка с запятой! Это не блок, а выражение с присваиванием функции
// функциональное выражение
// Делает функцию - переменой. Подходит для if-else, чтобы 
// объявить и использовать только в нужном случае

// Также существуют АНОНИМНЫЕ функции


let sum = function (a, b) {
    return a+b;
} // УКОРОЧЕНО со стрелочными функциями:
let sum = (a, b) => a+b; // если выражение в одну строчку, return перед ним можно не ставить

let makeCollectionFunc = () => new Array();
let combiner = (a, b, c) => {
    let Number1 = a-b;
    let Number2 = b/c;
    return Number2*Number1;
}

//Внутри функции её лексич. окружение создаётся при каждом вызове функции заново
// Лексическое окружение => область видимости = скоуп функции
// строго говоря [[scope]] - внутреннее свойство лексического окружения, которое ссылается на лекс окр родителя - внешнее лексическое окружение

//контекст функции - this
//this в декларированной функции без контекста будет window, А ПРИ 'use strict' - undefined
//this будет иметь для такой f смысл, когда на вызвана в контексте объекта:
// 1) obj.func()      2) new Obj        3) call/apply/bind

//divID.innerHTML - контент с тегами, наприм <p>Text</p>
//divID.innerContent - просто контент Text



