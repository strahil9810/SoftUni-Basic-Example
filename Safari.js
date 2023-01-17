function safari(input) {
    let budget = Number(input[0]);
    let literFuel = Number(input[1]);
    let day = input[2];

    let fulePrice = literFuel * 2.10;
    let allPrice = fulePrice + 100;

    if (day == "Saturday") {
        allPrice -= allPrice * 0.10;
    }
    else if (day == "Sunday") {
        allPrice -= allPrice * 0.20;
    }

    if (allPrice < budget) {
        let leftMoney = budget - allPrice;
        console.log(`Safari time! Money left: ${leftMoney.toFixed(2)} lv.`);
    }
    else {
        let neededMoney = allPrice - budget;
        console.log(`Not enough money! Money needed: ${neededMoney.toFixed(2)} lv.`);
    }
}
safari([120, 30, "Saturday"])