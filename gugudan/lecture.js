"use strict";
let numberOne = Math.ceil(Math.random() * 9);
let numberTwo = Math.ceil(Math.random() * 9);
let result = numberOne * numberTwo;
let word = document.createElement('div');
word.textContent = `${numberOne} x ${numberTwo} = ?`;
document.body.append(word);
const form = document.createElement('form');
document.body.append(form);
const input = document.createElement('input');
input.type = 'number';
form.append(input);
const button = document.createElement('button');
form.append(button);
const resultDiv = document.createElement('div');
document.body.append(resultDiv);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (Number(input.value) === result) {
        resultDiv.textContent = '딩동댕';
        let numberOne = Math.ceil(Math.random() * 9);
        numberTwo = Math.ceil(Math.random() * 9);
        result = numberOne * numberTwo;
        word.textContent = `${numberOne} x ${numberTwo} = ?`;
        input.value = '';
        input.focus();
    }
    else {
        resultDiv.textContent = '땡';
        input.value = '';
        input.focus();
    }
});
