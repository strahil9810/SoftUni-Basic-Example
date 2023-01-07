function player(input) {
    let topScore = 0;
    let nameScore = "";

    for (let i = 0; i < input.length; i += 2) {
        let playerName = input[i];
        let playerGoals = Number(input[i + 1]);

        if (playerName == "END") {
            break;
        }

        if (playerGoals >= 10) {
            console.log(`${playerName} is the best player!`);
            console.log(`He has scored ${playerGoals} goals and made a hat-trick !!!`)
            return;
        }


        if (topScore < playerGoals) {
            topScore = playerGoals;
            nameScore = playerName;
        }
    }

    if (topScore >= 3) {
        console.log(`${nameScore} is the best player!`);
        console.log(`He has scored ${topScore} goals and made a hat-trick !!!`)
    }
    else {
        console.log(`${nameScore} is the best player!`);
        console.log(`He has scored ${topScore} goals.`)
    }
}
player(["Neymar", 2, "Mbappe", 10, "Bojinov", 1])