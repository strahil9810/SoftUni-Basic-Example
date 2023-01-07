function catWalking(input) {
    let walkingMinutesWithOneDay = Number(input[0]);
    let numberWalkingOneDay = Number(input[1]);
    let eatCalories = Number(input[2]);

    let allMinutes = walkingMinutesWithOneDay * numberWalkingOneDay;
    let fyreCalories = allMinutes * 5;
    let halfCalories = eatCalories * 0.50;

    if (fyreCalories >= halfCalories) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${fyreCalories}.`);
    }
    else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${fyreCalories}.`);
    }
}
catWalking([30, 3, 600])