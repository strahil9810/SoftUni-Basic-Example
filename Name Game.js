function nameGame(input) {
    let win_player_name = "";
    let win_player_point = 0;

    for (let i = 0; i < input.length; i++) {
        let current_player_points = 0;
        let player_name = input[i];

        if (player_name == "Stop") {
            break;
        }

        for (let j = 0; j < player_name.length; j++) {
            let letter_player_name = player_name.charCodeAt(j);
            i++;

            if (letter_player_name == input[i]) {
                current_player_points += 10;
            }
            else {
                current_player_points += 2;
            }
        }

        if (current_player_points >= win_player_point) {
            win_player_point = current_player_points;
            win_player_name = player_name;
        }
    }
    console.log(`The winner is ${win_player_name} with ${win_player_point} points!`);
}
nameGame(["Pesho",
    "124",
    "34",
    "111",
    "97",
    "99",
    "Gosho",
    "98",
    "124",
    "88",
    "76",
    "18",
    "Stop"])
