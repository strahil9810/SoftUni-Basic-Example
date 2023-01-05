function bags(input) {
    let priceBagsOver20 = Number(input[0]);
    let kilogramBags = Number(input[1]);
    let days = Number(input[2]);
    let numberBags = Number(input[3]);
    let allSum = 0;

    if (kilogramBags < 10) {
        allSum = allSum + (priceBagsOver20 * 0.20);
    }
    else if (kilogramBags >= 10 && kilogramBags <= 20) {
        allSum = allSum + (priceBagsOver20 * 0.50);
    }
    else if (kilogramBags > 20) {
        allSum = priceBagsOver20;
    }

    if (days > 30) {
        allSum = allSum + (allSum * 0.10);
    }
    else if (days <= 30 && days >= 7) {
        allSum = allSum + (allSum * 0.15);
    }
    else if (days < 7) {
        allSum = allSum + (allSum * 0.40);
    }

    allSum = allSum * numberBags;
    console.log(`The total price of bags is: ${allSum.toFixed(2)} lv.`);

}
bags([25.50, 5, 36, 6])