function footballTournament(input) {
    let football_team_name = input[0];
    let football_team_play_number = Number(input[1]);
    let number_won = 0;
    let number_draw = 0;
    let number_lost = 0;
    let point_after_won = 0;
    let point_after_draw = 0;
    let all_point_result = 0;

    for (let i = 2; i < input.length; i++) {
        let football_team_play_result = input[i];

        if (football_team_play_result === 'W') {
            number_won++;
            point_after_won = number_won * 3;
        }
        else if (football_team_play_result == 'D') {
            number_draw++;
            point_after_draw = number_draw * 1;
        }
        else {
            number_lost++;
        }
    }

    all_point_result = point_after_won + point_after_draw;

    if (football_team_play_number === 0) {
        console.log(`${football_team_name} hasn't played any games during this season.`)
    }
    else {
        let percent_won = (number_won / football_team_play_number) * 100;
        console.log(`${football_team_name} has won ${all_point_result} points during this season.`);
        console.log("Total stats:");
        console.log(`## W: ${number_won}`);
        console.log(`## D: ${number_draw}`);
        console.log(`## L: ${number_lost}`);
        console.log(`Win rate: ${percent_won.toFixed(2)}%`);
    }
}
footballTournament(["Barcelona",
    "7",
    "W",
    "D",
    "L",
    "L",
    "W",
    "W",
    "D"])