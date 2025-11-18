console.log('javascript:switch');
// weekdays & weekends

// let day = prompt('Enter a day');

// switch(day){
//     case 'monday' :
//     case 'Monday' :
//         alert(day + ' is weekdays');
//     break;
//     case 'tuesday' :
//         alert(day + ' is weekdays');
//     break;
//     case 'wednesday' :
//         alert(day + ' is weekdays');
//     break;
//     case 'thursday' :
//         alert(day + ' is weekdays');
//     break;
//     case 'friday' :
//         alert(day + ' is weekdays');
//     break;
//     case 'saturday' :
//         alert(day + ' is weekends');
//     break;
//     case 'sunday' :
//         alert(day + ' is weekends');
//     break;
//     default:
//         alert('invalid day')
// }

// switch(day){
//     case 'monday' :
//     case 'Monday' :
//     case 'tuesday' :
//     case 'wednesday' :
//     case 'thursday' :
//     case 'friday' :
//         alert(day + ' is weekdays');
//     break;
//     case 'saturday' :
//     case 'sunday' :
//         alert(day + ' is weekends');
//     break;
//     default:
//         alert('invalid day')
// }

let msg = "Choose one of the following color:\n";
    msg += "Red \n Yellow \n Green"
let color = prompt(msg);
console.log('color => ', color);

switch(color) {
    case 'Red':
    case "red" :
        alert('STOP! your vehical');
    break;
    case 'Yellow':
    case "yellow" :
        alert('Slow down! your vehical');
    break;
    case 'Green':
    case "green" :
        alert('Drive safely!');
    break;
    default :
        alert('invalid signal indicator');
}