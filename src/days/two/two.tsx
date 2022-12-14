import { input } from './twoInput';

export default function Two(): JSX.Element {
    const maxScore = rockPaperScissors(input);
    const maxScore2 = rockPaperScissors2(input);


    return (
        <div className="container mx-auto m-4 p-4 border border-zinc-500">
            <h5 className="font-medium leading-tight text-2xl mt-0 mb-2 text-neutral-600">December 2nd:</h5>
            <p>The max score PART ONE: {maxScore}</p>
            <p>The max score PART TWO: {maxScore2}</p>
        </div>
    );
}

function rockPaperScissors(scores: string[]) {
    const scoreKey: Record<string, number> = {
        'A X': 4,
        'A Y': 8,
        'A Z': 3,
        'B Y': 5,
        'B X': 1,
        'B Z': 9,
        'C Z': 6,
        'C X': 7,
        'C Y': 2
    };

    let finalScore = 0;

    for (let score of scores) {
        finalScore += scoreKey[score];
    }

    return finalScore;
}

function rockPaperScissors2(scores: string[]) {
    const scoreKey: Record<string, number> = {
        'A X': 3,
        'A Y': 4,
        'A Z': 8,
        'B Y': 5,
        'B X': 1,
        'B Z': 9,
        'C Z': 7,
        'C X': 2,
        'C Y': 6
    };

    let finalScore = 0;

    for (let score of scores) {
        finalScore += scoreKey[score];
    }

    return finalScore;
}

//Part 1
    // ROCK - 1, PAPER -2, SCISSORS - 3
    // LOST - 0, DRAW  - 3, WON -6
    // ROCK ROCK - 1 + 3 = 4
    // ROCK PAPER - 2 + 6 = 8
    // ROCK SCISSORS - 3 + 0 = 3
    // PAPER PAPER - 2 + 3 = 5
    // PAPER ROCK - 1 + 0 = 1
    // PAPER SCISSORS - 3 + 6 = 9
    // SCISSORS SCISSORS - 3 + 3 = 6
    // SCISSORS ROCK - 1 + 6 = 7
    // SCISSORS PAPER - 2 + 0 = 2

//Part 2
    // X-LOSE Y-DRAW Z-WIN
    // 'A X': ROCK LOSE - SCISSORS - 3+0 = 3
    // 'A Y': ROCK DRAW - ROCK - 1+3= 4
    // 'A Z': ROCK WIN - PAPER - 2+6 = 8
    // 'B Y': PAPER DRAW - PAPER - 2+3 = 5
    // 'B X': PAPER LOSE - ROCK - 1+0 = 1
    // 'B Z': PAPER WIN - SCISSORS - 3+6 = 9
    // 'C Z': SCISSORS WIN - ROCK - 1+6 = 7
    // 'C X': SCISSORS LOSE - PAPER - 2+0 = 2
    // 'C Y': SCISSORS DRAW - SCISSORS - 3+3 = 6

