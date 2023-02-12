function backToThePast(input) {
    let money = Number(input[0]);
    let yearToLife = Number(input[1]);
    let ivanchoYear = 18;

    for (let i = 1800; i <= yearToLife; i++) {
        let price = 0;

        if (i % 2 == 0) {
            money -= 12000;
        }
        else {
            money -= (12000 + (50 * ivanchoYear));
        }

        ivanchoYear++;
    }

    if (money >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${money.toFixed(2)} dollars left.`);
    }
    else {
        let needeMoney = Math.abs(0 - money);
        console.log(`He will need ${needeMoney.toFixed(2)} dollars to survive.`);
    }
}
backToThePast([50000, 1802])