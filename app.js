const firstName = 'Avganistan';
const lastName = 'Borisov';
const age = 34;
const str = 'Hello my name is Avganistan';

let value;

value = firstName + lastName;

value = firstName + " " + lastName;

//value = value + 'I am' + age;

value += ' I am ' + age; //сокращенный вариантпрошлой записи

value = firstName.length; //определяем длинну строки
value = firstName[2]; // получаем третий символ в строке
value = firstName[firstName.length - 1]; // способ получить последний символ в строке

value = firstName.toUpperCase();

console.log(value, firstName);

value = firstName.toLowerCase();
console.log(value, firstName);

value = firstName.concat(' ', lastName);  // метод concat производит конкотенацию

console.log(value);


