function averageNumber(input){
    let number = Number(input[0]);
    let sumNumber = 0;

    let index = 1;
    while(index <= number){
        let currentNumber = Number(input[index]);

        sumNumber += currentNumber;

        index++;
    }

    console.log((sumNumber / number).toFixed(2));
}
averageNumber([4, 3, 2, 4, 2])