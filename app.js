const firstName = 'Avganistan';
const lastName = 'Borisov';
const age = 30;

let str;

str = '<ul>' +
        '<li>' + firstName + '</li>'+
        '<li>' + lastName + '</li>'+
        '<li>' + age + '</li>'+
    '</ul>';


//console.log(str);
//document.writeln(str);

str = `<ul>
            <li>First Name: ${firstName}</li>
            <li>Last name: ${lastName}</li>
            <li>Age: ${age}</li>
            <li>Math: ${Math.random()}</li>
            <li>5 + 5: ${5 + 5}</li>
        </ul>
`;

//console.log(str);

document.body.innerHTML = str; // интеграция в тело HTML страници
