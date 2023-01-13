function paitingEggs(input) {
    let eggSize = input[0];
    let eggColor = input[1];
    let eggNumber = Number(input[2]);
    let price = 0;

    switch (eggSize) {
        case "Large":
            if (eggColor == "Red") {
                price = eggNumber * 16;
            }
            else if (eggColor == "Green") {
                price = eggNumber * 12;
            }
            else if (eggColor == "Yellow") {
                price = eggNumber * 9;
            }
            price -= price * 0.35;
            console.log(`${price.toFixed(2)} leva.`);
            break;

        case "Medium":
            if (eggColor == "Red") {
                price = eggNumber * 13;
            }
            else if (eggColor == "Green") {
                price = eggNumber * 9;
            }
            else if (eggColor == "Yellow") {
                price = eggNumber * 7;
            }
            price -= price * 0.35;
            console.log(`${price.toFixed(2)} leva.`);
            break;

        case "Small":
            if (eggColor == "Red") {
                price = eggNumber * 9;
            }
            else if (eggColor == "Green") {
                price = eggNumber * 8;
            }
            else if (eggColor == "Yellow") {
                price = eggNumber * 5;
            }
            price -= price * 0.35;
            console.log(`${price.toFixed(2)} leva.`);
            break;
    }
}
paitingEggs(["Medium", "Green", 5])