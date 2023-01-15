function footballResult(input) {
    let firstGame = input[0];
    let secondGame = input[1];
    let thirdGame = input[2];

    let win = 0;
    let lose = 0;
    let draw = 0;

    let machScore1 = firstGame.substring(0, 1);
    let machScore2 = firstGame.substring(2, 3);

    if (machScore1 > machScore2) {
        win++;
    }
    else if (machScore1 < machScore2) {
        lose++;
    }
    else {
        draw++;
    }

    machScore1 = secondGame.substring(0, 1);
    machScore2 = secondGame.substring(2, 3);

    if(machScore1>machScore2){
        win++;
    }
    else if(machScore1<machScore2){
        lose++;
    }
    else{
        draw++;
    }

    machScore1=thirdGame.substring(0,1);
    machScore2=thirdGame.substring(2,3);

    if(machScore1>machScore2){
        win++;
    }
    else if(machScore1<machScore2){
        lose++;
    }
    else{
        draw++;
    }

    console.log(`Team won ${win} games.`);
    console.log(`Team lost ${lose} games.`)
    console.log(`Drawn games: ${draw}`);
}
footballResult(["3:1", "0:2", "0:0"])