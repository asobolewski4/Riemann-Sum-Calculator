const expressionBox = document.getElementById('expression-box');
const startPoint = document.getElementById('start-point');
const endPoint = document.getElementById('end-point');
const intervals = document.getElementById('intervals');

const leftRadio = document.getElementById('left-sum');
const rightRadio = document.getElementById('right-sum');
const midRadio = document.getElementById('mid-sum');
const trapRadio = document.getElementById('trap-sum');

const runButton = document.getElementById('run');
const resultBox = document.getElementById('result');
const tableBox = document.getElementById('table')

let line = document.createElement('li')
let text = document.createTextNode('stuff')

let sum;
let x;
let n;
let a;
let b;
let width;
let height;

runButton.addEventListener('click', (event) => {
        sum = 0;
        x = parseInt(startPoint.value);
        n = intervals.value;
        a = startPoint.value;
        b = endPoint.value;

    if(leftRadio.checked == true){
    leftSum();}
    if(rightRadio.checked == true){
    rightSum();}
    if(midRadio.checked == true){
    midSum();}
})


function midSum(){
    x += width / 2.0;
    for (i = 0; i<n; i++) {
        width = (b-a)/n;
        height = eval(expressionBox.value);
        sum += width * height;
        x+= width;
        }
        resultBox.value = round(sum,2);
}

function rightSum(){
        for (i = 0; i<n; i++) {
            width = (b-a)/n;
            x += width;
            height = eval(expressionBox.value);
            sum += width * height;

            }
            resultBox.value = round(sum,2);
}

function leftSum(){
    for (i = 0; i<n; i++) {
        width = (b-a)/n;
        height = eval(expressionBox.value);
        sum += width * height;
        x += width;
        }
        resultBox.value = round(sum,2);
}

function round(numberToRound, decimals){
let factor = Math.pow(10, decimals);
return (Math.round(numberToRound * factor))/factor;
}