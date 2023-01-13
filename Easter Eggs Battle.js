function eggsBattle(input) {
    let firstPlayerEggs = Number(input[0]);
    let secondPlayerEggs = Number(input[1]);

    for (let win = 2; win < input.length; win++) {
        let playerWin = input[win];

        if (playerWin == "one") {
            secondPlayerEggs--;
        }
        else if (playerWin == "two") {
            firstPlayerEggs--;
        }

        if (firstPlayerEggs <= 0) {
            console.log(`Player one is out of eggs. Player two has ${secondPlayerEggs} eggs left.`);
            break;
        }
        else if (secondPlayerEggs <= 0) {
            console.log(`Player two is out of eggs. Player one has ${firstPlayerEggs} eggs left.`);
            break;
        }

        if (playerWin == "End") {
            console.log(`Player one has ${firstPlayerEggs} eggs left.`);
            console.log(`Player two has ${secondPlayerEggs} eggs left.`);
            break;
        }
    }
}
eggsBattle([1, 1, "one", "two"])