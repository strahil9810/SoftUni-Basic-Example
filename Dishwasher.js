function dishwasher(input) {
    let numberBottle = Number(input[0]);
    let bottleMililiters = numberBottle * 750; 
    let allPlate = 0;
    let allPot = 0;
    let detergetUsedForWashPot = 0;
    let detergetUsedForWashPlate = 0;

    let index = 1;
    while(input[index] !== 'End'){
        let numberPlate = Number(input[index]);
        let numberPot = Number(input[index]);

        if(index % 3 === 0){
            detergetUsedForWashPot = numberPot * 15;
            bottleMililiters -= detergetUsedForWashPot;
            allPot += numberPot;

        }
        else{
            detergetUsedForWashPlate = numberPlate * 5;
            bottleMililiters -= detergetUsedForWashPlate;
            allPlate += numberPlate;
        }

        if(bottleMililiters < 0){
            console.log(`Not enough detergent, ${Math.abs(bottleMililiters)} ml. more necessary!`);
            break;
        }

        index++;
    }
    if(bottleMililiters >= 0){
        console.log('Detergent was enough!');
        console.log(`${allPlate} dishes and ${allPot} pots were washed.`);
        console.log(`Leftover detergent ${bottleMililiters} ml.`);
    }
}
dishwasher([2, 53, 65, 55, 'End'])