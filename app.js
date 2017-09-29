let table = document.getElementById('calculator');

let tds = document.querySelectorAll('td');
let number = document.querySelectorAll('.number');

let screen = document.getElementById('screen');
screen.innerHTML = ""; 

let equation = '';
let calcMemory = [];


//concatinate number in display as string
let constructNumber = (x) => {
    screen.innerHTML = screen.innerHTML + x;
    return screen.innerHTML;
}

//concatinate number in equation as string
let constructNumberEquation = (x) => {
    equation = equation + x;
}


//push fully parsed number to array
let parsePush = () => {
    parseInt(screen.innerHTML);
    calcMemory.push(screen.innerHTML);
}


//click number to add to screen 
table.addEventListener('click', (event) => {
    let instance = event.target;
    if(instance.tagName === "TD") {
        if(instance.className === "number") {
            console.log("This is a number" + instance.innerHTML);
             constructNumber(instance.innerHTML);
             constructNumberEquation(instance.innerHTML);
        }
    } 
});


//click operator to evalue display string number as number
table.addEventListener('click', (event) => {
    let instance = event.target;
    if(instance.tagName === "TD") {
        if(instance.className === "operator") {
            
            console.log("This is an operator");
            parsePush();

            constructNumberEquation(instance.innerHTML);
            screen.innerHTML = '';
        }
    } 
});

//click events for special buttons ---need to add some if statements instead
const evaluator = document.getElementById('evaluate');
evaluator.addEventListener('click', () => {
    evaluate();
});

const clearer = document.getElementById('clearer');
clearer.addEventListener('click', () => {
    clearAll();
});

const square = document.getElementById('square');
square.addEventListener('click', () => {
    squarer();
});



//operator functions

let squarer = (x) => {
    console.log('square');
    var num = eval(equation);
    var squaredNumber = num * num;
    screen.innerHTML = squaredNumber;
    equation = squaredNumber;
}

let evaluate = () => {
    var num = eval(equation);
    screen.innerHTML = num;
}

let clearAll = () => {
    equation = '';
    screen.innerHTML = '';
    calcMemory = [];
}
