function mountainRun(input) {
    let secondRecord = Number(input[0]);
    let meters = Number(input[1]);
    let secondForOneMeter = Number(input[2]);

    let distanceTime = meters * secondForOneMeter;
    let time = Math.floor(meters / 50) * 30;
    let allTime = distanceTime + time;

    if (allTime < secondRecord) {
        console.log(`Yes! The new record is ${allTime.toFixed(2)} seconds.`);
    }
    else {
        console.log(`No! He was ${(allTime-secondRecord).toFixed(2)} seconds slower.`);
    }
}
mountainRun([1377, 389, 3])