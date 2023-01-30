function pcGamesShop(input) {
    let number_sall_games = Number(input[0]);
    let number_hearthstone = 0;
    let number_fornite = 0;
    let number_overwatch = 0;
    let number_others = 0;
    let percent_hearthstone = 0;
    let percent_fornite = 0;
    let percent_overwatch = 0;
    let percent_others = 0;

    for (let i = 1; i < input.length; i++) {
        let name_games = input[i];

        if (name_games === "Hearthstone") {
            number_hearthstone++;
        }
        else if (name_games === "Fornite") {
            number_fornite++;
        }
        else if (name_games === "Overwatch") {
            number_overwatch++;
        }
        else {
            number_others++;
        }
    }
    percent_hearthstone = (number_hearthstone / number_sall_games) * 100;
    percent_fornite = (number_fornite / number_sall_games) * 100;
    percent_overwatch = (number_overwatch / number_sall_games) * 100;
    percent_others = (number_others / number_sall_games) * 100;

    console.log(`Hearthstone - ${percent_hearthstone.toFixed(2)}%`);
    console.log(`Fornite - ${percent_fornite.toFixed(2)}%`);
    console.log(`Overwatch - ${percent_overwatch.toFixed(2)}%`);
    console.log(`Others - ${percent_others.toFixed(2)}%`);
}
pcGamesShop([3,
    "Hearthstone",
    "Diablo 2",
    "Star Craft 2"])