console.log('Javascript: Conditions');

// check is it number or string
// var value1 = prompt('Enter a value 1');
// var value2 = Number.parseInt(prompt('Enter a value 2'));
// console.log('value => ', value1, value2);
// if(typeof value1 == 'string'){
//     alert('string');
// }
// else {
//     alert('number');
// }

// assignment
// var val_1 = 1234, val_2 = 'Fusion'; 

var msg = "Choose one of the following color \n";
msg += "A] Red \n";
msg += "B] Yellow \n";
msg += "C] Green";

var color = prompt(msg);

if(color == 'A' || color == 'a' || color == 'red' || color == 'Red'){
    alert('STOP! your vehical');
    console.log('STOP! your vehical');
}
else if(color == 'B' || color == 'b' || color == 'yellow' || color == 'Yellow') {
    alert('SLOW! down your vehical');
    console.log('SLOW! down your vehical');
}
else if(color == 'C' || color == 'c' || color == 'green' || color == 'Green') {
    alert('Drive safely');
    console.log('Drive safely');
}else {
    alert('Invalid signal indicator');
}

