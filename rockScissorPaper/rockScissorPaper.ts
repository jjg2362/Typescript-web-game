let imgCoords = '0';

interface RSP {
    readonly ROCK: '0',
    readonly SCISSORS: '-142px';
    readonly PAPER: '-284px'
}

type RSP_text = {
    ROCL: '0',
    SCISSORS: '-142px',
    PAPER: '-284px'
}
type Hello = string | number;
const hello = 'hello';
const hello2 = 2;

interface Example {
    a: 7,
    b: 3,
    [key: string]: number //뒤이어 올 값들을 확실할 수 없을 때, 값의 다양성을 열어둔다.
}

const rsp: RSP = {
    ROCK:'0',
    SCISSORS: '-142px',
    PAPER: '-284px'
}

const score = {
    ROCK: 0,
    SCISSORS: 1,
    PAPER: -1
} as const

function computerChoice(imgCoords: RSP[keyof RSP]): keyof RSP{
    return (Object.keys(rsp) as ['ROCK', 'SCISSORS', 'PAPER']).find((k)=>rsp[k] === imgCoords)!;
    //반환되는 값이 프로그래머인 우리는 확실히 undefined이 아닌 것을 알지만 타입시스템에서는 그것을 확신할 수 없다. 그럴 때 코드 뒤에 '!'를 붙혀 단언하여 문제가 없음을 알린다.
}

