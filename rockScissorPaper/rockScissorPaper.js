"use strict";
let imgCoords = '0';
const hello = 'hello';
const hello2 = 2;
const rsp = {
    ROCK: '0',
    SCISSORS: '-142px',
    PAPER: '-284px'
};
const score = {
    ROCK: 0,
    SCISSORS: 1,
    PAPER: -1
};
function computerChoice(imgCoords) {
    return Object.keys(rsp).find((k) => rsp[k] === imgCoords);
    //반환되는 값이 프로그래머인 우리는 확실히 undefined이 아닌 것을 알지만 타입시스템에서는 그것을 확신할 수 없다. 그럴 때 코드 뒤에 '!'를 붙혀 단언하여 문제가 없음을 알린다.
}
