let arr = new Array();
let arr = [];
let arr = ['one', 'two', 'three', 8, {name: 'Джон'}, true, function() {alert('привет');} ];

let arrLength = arry.push('last element'); //добавляет
let deletedElement = arry.pop(); //удаляет посл элемент, если не указать конкретный. Его же и возвращает

let deletedElement = shift('differentOne'); // меняет первый элемент, возврщает удаленный
let arrLength2 = unshift("very first elem"); // добавляет в начало, остальное сдвигает, возвр длину
arr.slice(1, 4);
// можно создавать массивы в объектах и объекты в массивах

let iterable = [10, 20, 30];

for (let value of iterable) {
  value += 1;
  console.log(value); //11 21 31
} //of
let iterable = new Map([['a', 1], ['b', 2], ['c', 3]]);
for (let entry of iterable) {
  console.log(entry); // ['a', 1] ['b', 2] ['c', 3]
}
for (let [key, value] of iterable) {
  console.log(value); // 1 2 3
}
// Не использует итератор. Берет только значение в массиве и больше никаких свойств
// ДЛЯ Array, Map, Set, объект аргументов и подобных

for (let roller in arr) {
	let rolly = roller;
}; //in
//проходит по свойствам в ПРОИЗВОЛЬНОМ порядке
//берет все ключи и значения. key str[key]
//проходит только по перечисляемым свойствам. Объекты, созданные встроенными конструкторами, такими как Array и Object имеют неперечисляемые свойства от Object.prototype и String.prototype, например, от String-это indexOf(), а от Object - метод toString(). Цикл пройдёт по всем перечисляемым свойствам объекта, а также тем, что он унаследует от конструктора прототипа (свойства объекта в цепи прототипа)