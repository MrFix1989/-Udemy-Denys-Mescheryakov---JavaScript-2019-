
let value;
value = String(10);   //String фенкция которая принимает в себя значение любое и оно будет преобразованно непосредственно к строке
value = String(10+34);

value = (40).toString();  // а это уже метод которые преобразовыввает в стринг
value = String(true);
value = String([1,3,5,2,3]);
value = String({name:'vladimir'});
value = 345 + '' + 30;

// String to number

value = Number('5745');
value = Number(true);
value = Number(null);
value = Number('true');
value = Number([2,3,5,6,4]);

value = parseInt('234234dfgdfgf'); //преобразует в число
value = parseInt('wrewr234234dfgdfgf');  // не преобразует в число
value = parseFloat('23.4234dfgdfgf');  //преобразует в число
value = parseFloat('dfgdfgdfg23.4234dfgdfgf');  //не преобразует в число

//Boolian

value = Boolean('23.4234dfgdfgf'); //любая заполненная строка будет считаться true
value = Boolean(''); //любая пустая строка будет считаться folse
value = Boolean(0); //также 0 будет считаться folse
value = Boolean(undefined); //будет считаться folse
value = Boolean(NaN); //удет считаться folse
value = Boolean([]); //удет считаться true
value = Boolean({}); //удет считаться true

console.log(value);
console.log(typeof value);   //определение типа данных которые мы выводим

