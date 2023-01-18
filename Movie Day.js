function movieDay(input) {
    let photosTime = Number(input[0]);
    let numberScene = Number(input[1]);
    let timeScene = Number(input[2]);

    let fieldPreparation = photosTime * 0.15;
    let timeForMovie = numberScene * timeScene;
    let allTime = fieldPreparation + timeForMovie;

    if (allTime >= photosTime) {
        let neededMinutes = allTime - photosTime;
        console.log(`Time is up! To complete the movie you need ${Math.round(neededMinutes)} minutes.`);
    }
    else {
        let leftMinutes = photosTime - allTime;
        console.log(`You managed to finish the movie on time! You have ${Math.round(leftMinutes)} minutes left!`);
    }
}
movieDay([60, 15, 3])