const x = 12;
const y = 11;


//if

if (x == 10) {
    console.log('x is 10');
} else {
    console.log('x is not 10');
}


// else if

if (x == 10) {
    console.log('x is 10');
} else if (x > 10) {
    console.log('x is greater than 10')
}
else {
    console.log('x is less than 10');
}


// multiple condition

if (x > 10 || y > 10) {
    console.log('x is less than 10 and y is greater than 10')
}

if (x < 10 && y > 10) {
    console.log('x is less than 10 and y is greater than 10')
}


// ternary operator

const color = x > 10 ? 'red' : 'blue'
console.log(color);


// switch statement

const color1 = 'green' ;

switch (color1) {
    case 'red':
        console.log('color is red');
        break;
        case 'blue':
            console.log('color is blue');
            break;
            default :
            console.log('color is not red or blue')
            break;

}