typeof 35; // вернет "number"
typeof "text"; // вернет "string"
typeof true; // вернет "boolean"
typeof [1, 2, 4]; // вернет "object"
typeof undefined; // вернет "undefined"
typeof null; // вернет "object" 
x=1 //если не указать var/let/const то даже в функции переменная будет ГЛОБАЛЬНОЙ

//лучше лишний раз не делать глобальную переменную, а локальную


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