function seriesCalculator(input) {
    let seriesName = input[0];
    let seriesNumberSeason = Number(input[1]);
    let seriesNumberEpisode = Number(input[2]);
    let seriesTimeWithoutReclams = Number(input[3]);

    let timeReclams = seriesTimeWithoutReclams * 0.20;
    let seriesTimeWithReclams = seriesTimeWithoutReclams + timeReclams;
    let additionallyTime = seriesNumberSeason * 10;

    let allTimeWatch = seriesTimeWithReclams * seriesNumberEpisode * seriesNumberSeason + additionallyTime;

    console.log(`Total time needed to watch the ${seriesName} series is ${Math.floor(allTimeWatch)} minutes.`);
}
seriesCalculator(["Lucifer", 3, 18, 55])