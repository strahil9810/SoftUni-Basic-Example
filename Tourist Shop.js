function touristShop(input) {
    let budget = Number(input[0]);
    let numberProduct = 0;
    let price = 0;
    let money = 0;
    let productMoney = 0;

    for (let i = 1; i < input.length; i += 2) {
        let productName = input[i];
        let productPrice = Number(input[i + 1]);

        if (productName == "Stop") {
            break;
        }

        if (productPrice > budget) {
            break;
        }

        numberProduct++;

        if (numberProduct % 3 == 0) {
            productPrice /= 2;
        }

        price += productPrice;
        money = budget - price;
    }

    if (price < budget) {
        console.log(`You bought ${numberProduct} products for ${price.toFixed(2)} leva.`);
    }
    else {
        let neededMoney = price - budget;
        console.log(`You don't have enough money!`);
        console.log(`You need ${neededMoney.toFixed(2)} leva!`)
    }
}
touristShop([54,
    "Thermal underwear",
    24,
    "Sunscreen",
    45])