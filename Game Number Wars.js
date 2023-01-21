function gameWars(input) {
    let firstPlayerName = input[0];
    let secondPlayerName = input[1];

    let firstPlayerPoint = 0;
    let secondPlayerPoint = 0;

    for (let i = 2; i < input.length; i += 2) {
        if (input[i] == "End of game") {
            break;
        }
        let firstPlayerCard = Number(input[i]);
        let secondPlayerCard = Number(input[i + 1]);

        if (firstPlayerCard > secondPlayerCard) {
            firstPlayerPoint += firstPlayerCard - secondPlayerCard;
        }
        else if (secondPlayerCard > firstPlayerCard) {
            secondPlayerPoint += secondPlayerCard - firstPlayerCard;
        }
        else {
            firstPlayerCard = Number(input[i + 2]);
            secondPlayerCard = Number(input[i + 3]);
            if (firstPlayerCard > secondPlayerCard) {
                console.log(`Number wars!`);
                console.log(`${firstPlayerName} is winner with ${firstPlayerPoint} points`);
                return;
            }
            else {
                console.log(`Number wars!`);
                console.log(`${secondPlayerName} is winner with ${secondPlayerPoint} points`);
                return;
            }
        }
    }
    console.log(`${firstPlayerName} has ${firstPlayerPoint} points`);
    console.log(`${secondPlayerName} has ${secondPlayerPoint} points`);
}
gameWars(["Aleks",
"Georgi",
"4",
"5",
"3",
"2",
"4",
"3",
"4",
"4",
"5",
"2"])