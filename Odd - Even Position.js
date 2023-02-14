function oddEvenPosition(input) {
    let numberLength = Number(input.shift());
    let evenSum = 0;
    let evenMax = Number.MIN_SAFE_INTEGER;
    let evenMin = Number.MAX_SAFE_INTEGER;
    let oddSum = 0;
    let oddMax = Number.MIN_SAFE_INTEGER;
    let oddMin = Number.MAX_SAFE_INTEGER;

    for (let index = 1; index <= numberLength; index++) {
        let numbers = Number(input.shift());

        if (index % 2 === 0) {
            evenSum += numbers;

            if (evenMin > numbers) {
                evenMin = numbers;
            }

            if (evenMax < numbers) {
                evenMax = numbers;
            }
        }
        else {
            oddSum += numbers;

            if (oddMin > numbers) {
                oddMin = numbers;
            }

            if (oddMax < numbers) {
                oddMax = numbers;
            }
        }
    }

    if (oddSum === 0) {
        let zero = 0;

        console.log(`OddSum=${zero.toFixed(2)},`);
        console.log(`OddMin=No,`);
        console.log(`OddMax=No,`);
    }
    else {
        console.log(`OddSum=${oddSum.toFixed(2)},`);
        console.log(`OddMin=${oddMin.toFixed(2)},`);
        console.log(`OddMax=${oddMax.toFixed(2)},`);
    }

    if (evenSum === 0) {
        let zero = 0;

        console.log(`EvenSum=${zero.toFixed(2)},`);
        console.log(`EvenMin=No,`);
        console.log(`EvenMax=No`);
    }
    else {
        console.log(`EvenSum=${evenSum.toFixed(2)},`);
        console.log(`EvenMin=${evenMin.toFixed(2)},`);
        console.log(`EvenMax=${evenMax.toFixed(2)}`);
    }
}
oddEvenPosition([1, -5])