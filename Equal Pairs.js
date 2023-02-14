function equalPairs(input) {
    let pairsOfNumber = Number(input.shift());
    let lastPair = 0;
    let maxDiff = 0;

    for(let index = 0; index < pairsOfNumber; index++){
        let number1 = Number(input.shift());
        let number2 = Number(input.shift());
        let currentSum = number1 + number2;

        if(index > 0){
            let diff = Math.abs(currentSum - lastPair);

            if(diff > maxDiff){
                maxDiff = diff;
            }
        }
        lastPair = currentSum;
    }

    if(maxDiff === 0){
        console.log(`Yes, value=${lastPair}`);
    }
    else{
        console.log(`No, maxdiff=${maxDiff}`);
    }
}
equalPairs([3, 1, 2, 0, 3, 4, -1])