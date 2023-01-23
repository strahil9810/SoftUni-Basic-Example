function godzillaVSKong(input) {
    let filmBudget = Number(input[0]);
    let statistNumber = Number(input[1]);
    let costForOneStatistPrice = Number(input[2]);

    let filmDecor = filmBudget * 0.10;
    let priceCost = statistNumber * costForOneStatistPrice;

    if (statistNumber >= 150) {
        priceCost -= priceCost * 0.10;
    }

    let allFilmPrice = filmDecor + priceCost;

    if (allFilmPrice > filmBudget) {
        let neededPrice = allFilmPrice - filmBudget;
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${neededPrice.toFixed(2)} leva more.`);
    }
    else {
        let leftPrice = filmBudget - allFilmPrice;
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${leftPrice.toFixed(2)} leva left.`);
    }
}
godzillaVSKong([15437.62, 186, 57.99])