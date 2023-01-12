function tournamentOfChristmas(input) {
    let numberDay = Number(input[0]);
    let win = 0;
    let totalWin = 0;
    let lose = 0;
    let totalLose = 0;
    let price = 0;
    let totalPrice = 0;
    let firstSport = 1;
    let priceWinTournament = 0;

    for (let days = 1; days <= numberDay; days++) {
        for (let sport = firstSport; sport < input.length; sport += 2) {
            let typeSport = input[sport];

            if (typeSport == "Finish") {
                firstSport = sport + 1;
                break;
            }
            let numberWin = input[sport + 1];
            if (numberWin == "win") {
                win++;
                price += 20;
            }
            else {
                lose++;
            }
        }
        if (win > lose) {
            price += price * 0.1;
        }

        totalWin += win;
        totalLose += lose;
        totalPrice += price;

        price = 0;
        win = 0;
        lose = 0;
    }

    if (totalWin > totalLose) {
        priceWinTournament = totalPrice + (totalPrice * 0.20);
        console.log(`You won the tournament! Total raised money: ${priceWinTournament.toFixed(2)}`);
    }
    else {
        console.log(`You lost the tournament! Total raised money: ${totalPrice.toFixed(2)}`);
    }
}
tournamentOfChristmas([3,
    "darts",
    "lose",
    "handball",
    "lose",
    "judo",
    "win",
    "Finish",
    "snooker",
    "lose", "swimming",
    "lose",
    "squash",
    "lose",
    "table tennis",
    "win",
    "Finish",
    "volleyball",
    "win",
    "basketball",
    "win",
    "Finish"])