function tennisRanklist(input) {
    let numberTourney = Number(input[0]);
    let startPoint = Number(input[1]);
    let point = 0;
    let averagePoint = 0;
    let maxPoint = 0;
    let won = 0;
    let percentWon = 0;

    for (let i = 2; i < input.length; i++) {
        let tourney = input[i];

        switch (tourney) {
            case 'W':
                point += 2000;
                break;

            case 'F':
                point += 1200;
                break;

            case 'SF':
                point += 720;
                break;
        }

        if (tourney == "W") {
            won++;
        }

        averagePoint = point / numberTourney;
        maxPoint = startPoint + point;
        percentWon = (won / numberTourney) * 100;

    }
    console.log(`Final points: ${maxPoint}`);
    console.log(`Average points: ${Math.floor(averagePoint)}`);
    console.log(`${percentWon.toFixed(2)}%`)
}

tennisRanklist([4,
    "750",
    "SF",
    "W",
    "SF",
    "W"])