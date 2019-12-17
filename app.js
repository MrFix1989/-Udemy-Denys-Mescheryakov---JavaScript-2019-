
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

value = 0.6 + 0.7;
value = parseFloat(value.toFixed(1)); // функция по округлению до еужного значеия после запятой
// + перед функцией переводит результат в чисорврй тип  или используем знакомую нам функцию parseFloat

console.log(value);
console.log(typeof value);
