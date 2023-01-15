function skeleton(input) {
    let controlMinutes = Number(input[0]);
    let controlSeconds = Number(input[1]);
    let longMeters = Number(input[2]);
    let secondsOn100Meters = Number(input[3]);

    let controlToSeconds = controlMinutes * 60 + controlSeconds;
    let slowTime = longMeters / 120;
    let allSlowTime = slowTime * 2.5;
    let timeMartin=(longMeters/100)*secondsOn100Meters-allSlowTime;

    if(timeMartin<=controlToSeconds){
        console.log(`Marin Bangiev won an Olympic quota!`);
        console.log(`His time is ${timeMartin.toFixed(3)}.`);
    }
    else{
        console.log(`No, Marin failed! He was ${(timeMartin-controlToSeconds).toFixed(3)} second slower.`);
    }
}
skeleton([2, 12, 1200, 10])