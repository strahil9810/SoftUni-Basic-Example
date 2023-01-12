function easterLunch(input) {
    let numberEasterBread = Number(input[0]);
    let numberBarkEggs = Number(input[1]);
    let kilogramBiscuit = Number(input[2]);

    let priceEasterBread = numberEasterBread * 3.20;
    let priceBarkEggs = numberBarkEggs * 4.35;
    let priceBiscuit = kilogramBiscuit * 5.40;
    let priceColorEggs = numberBarkEggs * 12 * 0.15;

    let sum = priceEasterBread + priceBarkEggs + priceBiscuit + priceColorEggs;
    console.log(sum.toFixed(2));
}
easterLunch([3, 2, 3])