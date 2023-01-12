function easterLunch(input) {
    let priceFlourForOneKg = Number(input[0]);
    let kilogramFlour = Number(input[1]);
    let kilogramSugar = Number(input[2]);
    let numberEggs = Number(input[3]);
    let packetsMaia = Number(input[4]);

    let priceSugar = priceFlourForOneKg - (priceFlourForOneKg * 0.25);
    let priceNumberEggs = priceFlourForOneKg + (priceFlourForOneKg * 0.10);
    let pricePacketMaia = priceSugar - (priceSugar * 0.80);
    let priceFlour = priceFlourForOneKg * kilogramFlour;
    let allPriceSugar = kilogramSugar * priceSugar;
    let allPriceEggs = numberEggs * priceNumberEggs;
    let allPriceMaia = packetsMaia * pricePacketMaia;
    let allSum = priceFlour + allPriceEggs + allPriceMaia + allPriceSugar;

    console.log(allSum.toFixed(2));
}
easterLunch([63.44, 3.57, 6.35, 8, 2])