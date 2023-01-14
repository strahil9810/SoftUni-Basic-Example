function tennis(input) {
    let tennisRocketsPrice = Number(input[0]);
    let numberTennisRockets = Number(input[1]);
    let numberShoots = Number(input[2]);

    let priceRockets = numberTennisRockets * tennisRocketsPrice;
    let oneShoots = tennisRocketsPrice / 6;
    let priceAllShoots = numberShoots * oneShoots;

    let priceOtherEquipment = (priceRockets + priceAllShoots) * 0.2;
    let allPrice = priceRockets + priceAllShoots + priceOtherEquipment;

    let priceDjokovic = allPrice / 8;
    let priceSponsor = allPrice * 7 / 8;

    console.log(`Price to be paid by Djokovic ${Math.trunc(priceDjokovic)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(priceSponsor)}`);
}
tennis([386, 7, 4])