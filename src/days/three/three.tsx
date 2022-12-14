import { input } from './threeInput'

export default function Three() {
    const wrongItemsScore = findRucksackScore(input);

    return (
        <div className="container mx-auto m-4 p-4 border border-zinc-500">
            <h5 className="font-medium leading-tight text-2xl mt-0 mb-2 text-neutral-600">December 3rd:</h5>
            <p>The rucksack score: {wrongItemsScore}</p>
        </div>
    );
}

function findRucksackScore(sacks: string[]) {
    let wrongItemsScore = 0;

    for (let sack of sacks) {
        const halfIdx = Math.floor(sack.length / 2);
        const A = sack.slice(0, halfIdx);
        const B = sack.slice(halfIdx);

        const seenA = new Set(A);

        for (let i = 0; i < B.length; i++) {
            let item = B[i];
            if(seenA.has(item)) {
                const code = B.charCodeAt(i);
                const priority = code > 97 ? code - 96 : code - 38;
                wrongItemsScore += priority;
                break;
            }
        }
    }
    return wrongItemsScore;
}

function findGroupRucksackScore(sacks: string[]) {
    let wrongItemsScore = 0;

    for (let sack of sacks) {




        const halfIdx = Math.floor(sack.length / 2);
        const A = sack.slice(0, halfIdx);
        const B = sack.slice(halfIdx);

        const seenA = new Set(A);

        for (let i = 0; i < B.length; i++) {
            let item = B[i];
            if(seenA.has(item)) {
                const code = B.charCodeAt(i);
                const priority = code > 97 ? code - 96 : code - 38;
                wrongItemsScore += priority;
                break;
            }
        }
    }
    return wrongItemsScore;
}

// a 97 -> minus 96
// A 65 -> minus 38