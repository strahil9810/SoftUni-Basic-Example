function sleepycat(input) {
    let holiday = Number(input[0]);

    let game_time_at_holiday = holiday * 127;
    let game_time_at_work = (365 - holiday) * 63;
    let all_time_game = game_time_at_holiday + game_time_at_work;
    let difference_time = Math.abs(all_time_game - 30000);
    let hour = difference_time / 60;
    let minutes = difference_time % 60;

    if (all_time_game > 30000) {
        console.log("Tom will run away");
        console.log(`${Math.floor(hour)} hours and ${Math.floor(minutes)} minutes more for play`);
    }
    else {
        console.log("Tom sleeps well");
        console.log(`${Math.floor(hour)} hours and ${Math.floor(minutes)} minutes less for play`);
    }
}
sleepycat([20])