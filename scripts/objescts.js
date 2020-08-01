typeof 35; // вернет "number"
typeof "text"; // вернет "string"
typeof true; // вернет "boolean"
typeof [1, 2, 4]; // вернет "object"
typeof undefined; // вернет "undefined"
typeof null; // вернет "object" ФУНКЦИЯ - ТОЖЕ ОБЪЕКТ
x=1 //если не указать var/let/const то даже в функции переменная будет ГЛОБАЛЬНОЙ

//ОПЕРАЦИИ И ОПЕРАТОРЫ:
//ОПЕРАЦИИ И ОПЕРАТОРЫ:
'2' == 2; //true
true != 0; //true
false == 0 //true
"">-5; //true
false == []; //true
false == ''; //true
""==false; //true всё выше, т.к. пустая строка приводится к 0, 0 - к false
// строгое равенство === бы не прокатило, этот оператор не приводит типы

//раница при передаче == и === в this:
let five = 5;
five.difrence();
function difrence ( ) {
    this == 5; //true
    this === 5; //false
}
//Работа с числами:
isNan(five);
isFinite("6");
parseInt("6");
parseFloat('8.2');

let power = 2**3; //8 степень числа
let stringFromNum = +"5"; //5
+true; //1
+false; //0
+''; //0
let x, y;
x%=y; // x= x%y


//унарный оператор - работает с 1 переменной. Наприм инкремент
//бинарный - с двумя. 2+2; int1 = int2
//тернарный - с тремя. isTrue? funcA() : funcB();

// Для создания кучи одинаковых объеков - конструктор. Он с БОЛЬШОЙ буквы!
function Point (x, y) {
    this.x = x;
    this.y = y;
}
let point1 = new Point(1, -2);

let objectOne = {
    manufacturer: 'opel',
    model: 'astra',
    year: 2011,
    ac: true, //висячая запятая, чтобы удобнее было добавлять свойства
};

let objectTwo = Object.create(objectOne);
objectTwo = {
    model: 'calibra', // переписали свойство отца
    type: coupe, // добавили свойство
};