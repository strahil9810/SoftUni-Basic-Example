function easterDecoration(input) {
    let numberPeople = Number(input[0]);
    let counter = 1;
    let product = input[counter];

    let price = 0;
    let sum = 0;
    let average = 0;
    let quantityProduct = 0;

    for (let i = 1; i <= numberPeople; i++) {
        while (product !== "Finish") {
            switch (product) {
                case "basket":
                    price += 1.50;
                    break;

                case "wreath":
                    price += 3.80;
                    break;

                case "chocolate bunny":
                    price += 7;
                    break;
            }
            product = input[++counter];
            quantityProduct++;
        }

        if (quantityProduct % 2 == 0) {
            price -= price * 0.20;
        }

        sum += price;

        console.log(`You purchased ${quantityProduct} items for ${price.toFixed(2)} leva.`);
        price = 0;
        quantityProduct = 0;
        product = input[++counter];
    }
    average = sum / numberPeople;
    console.log(`Average bill per client is: ${average.toFixed(2)} leva.`);
}
easterDecoration(["1",
"basket",
"wreath",
"chocolate bunny",
"wreath",
"basket",
"chocolate bunny",
"Finish"])