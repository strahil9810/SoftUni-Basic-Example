function birthdayParty(input) {
    let price = Number(input);

    let priceCake = price * 0.20;
    let priceDring = priceCake - (priceCake * 0.45);

    let priceAnimation = price / 3;
    let sum = price + priceCake + priceDring + priceAnimation;
    console.log(sum);
}
birthdayParty(3720)