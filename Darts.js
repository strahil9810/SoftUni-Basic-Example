function darts(input) {
    let playerName = input[0];
    let maxPoint = 301;
    let inputShoot = 0;
    let outputShoot = 0;

    for (let i = 1; i < input.length; i += 2) {
        let field = input[i];
        let point = Number(input[i + 1]);

        switch (field) {
            case 'Double':
                point *= 2;
                break;

            case 'Triple':
                point *= 3;
                break;

            case 'Retire':
                console.log(`${playerName} retired after ${outputShoot} unsuccessful shots.`);
                return;
        }

        if (maxPoint < point) {
            outputShoot++;
            continue;
        }

        maxPoint -= point;

        inputShoot++;

        if (maxPoint == 0) {
            console.log(`${playerName} won the leg with ${inputShoot} shots.`);
        }
    }
}
darts(["Stephen Bunting",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Double",
"7",
"Single",
"12",
"Double",
"1",
"Single",
"1"])