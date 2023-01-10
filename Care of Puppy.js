function careOfPuppy(input) {
    let quantityEat = Number(input[0]);
    let totalEat = quantityEat * 1000;
    let allDogEat = 0;
    let leftoverFood = 0;

    for (let i = 1; i < input.length; i++) {
        let eatGr = input[i];
        if (eatGr == "Adopted") {
            break;
        }
        eatGr = Number(input[i]);
        allDogEat += eatGr;
    }

    leftoverFood = totalEat - allDogEat;

    if (totalEat >= allDogEat) {
        console.log(`Food is enough! Leftovers: ${Math.abs(leftoverFood)} grams.`);
    }
    else {
        console.log(`Food is not enough. You need ${Math.abs(leftoverFood)} grams more.`);
    }
}
careOfPuppy([3, 1000, 1000, 1000, "Adopted"])