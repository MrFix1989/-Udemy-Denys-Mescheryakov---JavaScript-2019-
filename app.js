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


console.log(value);


