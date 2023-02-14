function gameInterval(input){
    let numberMoves = Number(input[0]);
    let startPoint = 0;
    let number0To9 = 0;
    let number10To19 = 0;
    let number20To29 = 0;
    let number30To39 = 0;
    let number40To50 = 0;
    let otherNumber = 0;

    for(let index = 1; index < input.length; index++){
        let numbers = Number(input[index]);

        if(numbers >= 0 && numbers <= 9){
            startPoint += numbers * 0.20;
            number0To9++;
        }
        else if(numbers >= 10 && numbers <= 19){
            startPoint += numbers * 0.30;
            number10To19++;
        }
        else if(numbers >= 20 && numbers <= 29){
            startPoint += numbers * 0.40;
            number20To29++;
        }
        else if(numbers >= 30 && numbers <= 39){
            startPoint += 50;
            number30To39++;
        }
        else if(numbers >= 40 && numbers <= 50){
            startPoint += 100;
            number40To50++;
        }
        else{
            startPoint /= 2;
            otherNumber++;
        }
    }
    console.log(startPoint.toFixed(2));

    let percentNumber0To9 = (number0To9 / numberMoves) * 100;
    console.log(`From 0 to 9: ${percentNumber0To9.toFixed(2)}%`);

    let percentNumber10To19 = (number10To19 / numberMoves) * 100;
    console.log(`From 10 to 19: ${percentNumber10To19.toFixed(2)}%`);

    let percentNumber20To29 = (number20To29 / numberMoves) * 100;
    console.log(`From 20 to 29: ${percentNumber20To29.toFixed(2)}%`);

    let percentNumber30To39 = (number30To39 / numberMoves) * 100;
    console.log(`From 30 to 39: ${percentNumber30To39.toFixed(2)}%`);

    let percentNumber40To50 = (number40To50 / numberMoves) * 100;
    console.log(`From 40 to 50: ${percentNumber40To50.toFixed(2)}%`);

    let percentOhter = (otherNumber / numberMoves) * 100;
    console.log(`Invalid numbers: ${percentOhter.toFixed(2)}%`);
}
gameInterval([10, 43, 57, -12, 23, 12, 0, 50, 40, 30, 20])