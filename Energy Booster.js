function energyBooster(input) {
    let fruit = input[0];
    let size = input[1];
    let number = Number(input[2]);
    let price = 0;

    switch (fruit) {
        case 'Watermelon':
            if (size == 'small') {
                price = 2 * 56;
            }
            else if (size == 'big') {
                price = 5 * 28.70;
            }

            price = price * number;

            if (price >= 400 && price <= 1000) {
                price -= price * 0.15;
            }
            else if (price > 1000) {
                price -= price * 0.50;
            }
            console.log(`${price.toFixed(2)} lv.`);
            break;

        case 'Mango':
            if (size == 'small') {
                price = 2 * 36.66;
            }
            else if (size == 'big') {
                price = 5 * 19.60;
            }

            price = price * number;

            if (price >= 400 && price <= 1000) {
                price -= price * 0.15;
            }
            else if (price > 1000) {
                price -= price * 0.50;
            }
            console.log(`${price.toFixed(2)} lv.`);
            break;

        case 'Pineapple':
            if (size == 'small') {
                price = 2 * 42.10;
            }
            else if (size == 'big') {
                price = 5 * 24.80;
            }

            price = price * number;

            if (price >= 400 && price <= 1000) {
                price -= price * 0.15;
            }
            else if (price > 1000) {
                price -= price * 0.50;
            }
            console.log(`${price.toFixed(2)} lv.`);
            break;

        case 'Raspberry':
            if (size == 'small') {
                price = 2 * 20;
            }
            else if (size == 'big') {
                price = 5 * 15.20;
            }

            price = price * number;

            if (price >= 400 && price <= 1000) {
                price -= price * 0.15;
            }
            else if (price > 1000) {
                price -= price * 0.50;
            }
            console.log(`${price.toFixed(2)} lv.`);
            break;
    }
}
energyBooster(["Mango",
    "big",
    8])