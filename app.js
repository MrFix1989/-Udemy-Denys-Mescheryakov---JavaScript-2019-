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

value = firstName.indexOf('n'); //мтод производит поиск симфола или слова в строке, при этом указывает только первое встречабшееся совпадение
console.log(value);

value = str.indexOf('n', 10); // таким образом мы указываем сетоду поиск начиная с 10 символа в строке пинуя первое совпадение
console.log(value);


value = str.indexOf('!'); // если совпадений нет то метод выводит -1
console.log(value);




