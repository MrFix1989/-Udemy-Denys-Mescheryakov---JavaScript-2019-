
const num1 = 10;
const num2 = 78;
let value;

value = num1 + num2;
console.log(value);

value = value + 100; //операция суммы и после присвоения
console.log(value);

value += 100; //коротки вариант предыдушей записи
console.log(value);

value = 4 % 2; //оператор % показывает остаток от деления
console.log(value);

value++;     // +1 изменения произойдут на следующей строке
console.log(value);

value--;     //-1
console.log(value);

--value;    //-1
console.log(value);

++value;    // +1 изменения произойдут на этой же строке
console.log(value);

//Работа с неточными числами

//value = 0.6 + 0.7;
/*
value = parseFloat(value.toFixed(1)); // функция по округлению до еужного значеия после запятой
// + перед функцией переводит результат в чисорврй тип  или используем знакомую нам функцию parseFloat


value = (0.6* 10 + 0.7 * 10) /10; //математический вариант решения проблеммы
*/

console.clear();
//Math
value = Math.PI; // число Pi
value = Math.random(); // рандомное число от 0 до 1
value = Math.round(3.5); //математическое округление
value = Math.ceil(2.1); // округляет всегда у большую сторону
value = Math.floor(2.6); // округляет всегда у меньшую сторону
value = Math.min(7,3,9,44,464,0.345); //возвращяет минимальное число из переданного списка

value = Math.floor(Math.random() * 10 + 1); // таким образом получаем рандобное число от 1 до 10

const color = ['Gludio', 'Gludin' , 'Dion', 'Giran', 'Aden', 'Hunter Village', 'Goddard', 'Shutgard'];
value = Math.floor( Math.random() * color.length);


console.log(value, color[value]);
console.log(typeof value);
