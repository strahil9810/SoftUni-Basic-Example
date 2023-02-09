function numberMultiplied2(input){
    let index = 0;

    while(input[index].length !== 0){
        let sum = 0;
        let number = Number(input[index]);

        sum = number * 2;

        if(input[index] < 0){
            console.log('Negative number!');
            break;
        }
        else{
            console.log(`Result: ${sum.toFixed(2)}`)
        }

        index++;
    }
}
numberMultiplied2([12, 43.2144, 12.3, 543.23, -20])