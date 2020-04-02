"use strict";
const { body } = document;
let array;
let candidate;
const chooseNumber = () => {
    candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    array = [];
    for (let i = 0; i < 4; i++) {
        let choosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(choosen);
    }
    console.log(array);
};
chooseNumber();
const fragment = document.createDocumentFragment();
const results = document.createElement('h1');
fragment.append(results);
const forms = document.createElement('form');
fragment.append(forms);
const inputs = document.createElement('input');
forms.append(inputs);
inputs.type = 'text';
inputs.maxLength = 4;
const buttons = document.createElement('button');
forms.append(buttons);
buttons.textContent = 'Submit';
body.append(fragment);
let wrongCount = 0;
forms.addEventListener('submit', e => {
    e.preventDefault();
    let userInput = inputs.value;
    if (userInput === array.join('')) {
        results.textContent = '딩동댕!';
        resetGame();
    }
    else {
        if (wrongCount > 10) {
            results.textContent = `틀린 횟수가 10회가 넘어 실패했습니다! 정답은 ${array.join(',')}입니다.!`;
            resetGame();
        }
        else {
            let strike = 0;
            let ball = 0;
            for (let i = 0; i < 4; i++) {
                if (array[i] === Number(userInput[i])) {
                    strike++;
                }
                else if (array.indexOf(Number(userInput[i])) > -1) {
                    ball++;
                }
                results.textContent = `${strike}strike ${ball}ball!`;
            }
        }
        wrongCount++;
    }
});
const resetGame = () => {
    wrongCount = 0;
    inputs.value = '';
    inputs.focus();
    chooseNumber();
};
