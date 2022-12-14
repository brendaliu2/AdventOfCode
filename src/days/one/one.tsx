import { input } from "./oneInput";

export default function One() {
    const maxFood = findMax(input);
    const [first, second, third] = findTopThree(input)

    return (
        <div className="container mx-auto m-4 p-4 border border-zinc-500">
            <h5 className="font-medium leading-tight text-2xl mt-0 mb-2 text-neutral-600">December 1st:</h5>
            <p>The max calorie: {first}</p>
            <p>The top three: {first + second + third}</p>
        </div>
    );
}


function findMax (foods: number[]) {
    let max = 0;
    let currentElf = 0;

    for (let food of foods) {
        if(food) {
            currentElf += food;
        } else {
            max = Math.max(currentElf, max);
            currentElf = 0;
        }
    }

    return max;
}

function findTopThree (foods: number[]) {
    let first = 0;
    let second = 0;
    let third = 0;

    let currentElf = 0;

    for(let food of foods) {
        if (food) {
            currentElf += food;
        } else {
            if (currentElf > first) {
                third = second;
                second = first;
                first = currentElf;
            } else if (currentElf > second) {
                third = second;
                second = currentElf;
            } else if (currentElf > third) {
                third = currentElf;
            }

            currentElf = 0;
        }
    }

    return [first, second, third];
}
