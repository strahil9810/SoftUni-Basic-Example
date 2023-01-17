function mobileOperator(input) {
    let termContract = input[0];
    let typeContract = input[1];
    let addNetwork = input[2];
    let monthForPrice = Number(input[3]);

    let price = 0;
    let allSum = 0;

    switch (typeContract) {
        case 'Small':
            if (termContract == "one") {
                price = 9.98;
            }
            else if (termContract == "two") {
                price = 8.58;
            }
            break;

        case 'Middle':
            if (termContract == "one") {
                price = 18.99;
            }
            else if (termContract == "two") {
                price = 17.09;
            }
            break;

        case 'Large':
            if (termContract == "one") {
                price = 25.98;
            }
            else if (termContract == "two") {
                price = 23.59;
            }
            break;

        case 'ExtraLarge':
            if (termContract == "one") {
                price = 35.99;
            }
            else if (termContract == "two") {
                price = 31.79;
            }
            break;
    }

    if (addNetwork == "yes") {
        if (price <= 10) {
            price += 5.50;
        }
        else if (price <= 30) {
            price += 4.35;
        }
        else if (price > 30) {
            price += 3.85;
        }
    }

    if (termContract == "two") {
        price -= price * 0.0375;
    }

    allSum=price*monthForPrice;

    console.log(`${allSum.toFixed(2)} lv.`);
}
mobileOperator(["two", "Large", "no", 10])