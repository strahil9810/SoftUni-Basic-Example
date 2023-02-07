function truckDriver(input) {
    let season = input[0];
    let kilometers = Number(input[1]);

    let price = 0;

    if (kilometers <= 5000) {
        switch (season) {
            case "Spring":
            case "Autumn":
                price = kilometers * 0.75 * 4;
                price -= price * 0.10;
                console.log(price.toFixed(2));
                break;

            case "Summer":
                price = kilometers * 0.90 * 4;
                price -= price * 0.10;
                console.log(price.toFixed(2));
                break;

            case "Winter":
                price = kilometers * 1.05 * 4;
                price -= price * 0.10;
                console.log(price.toFixed(2));
                break;
        }
    }
    else if (kilometers > 5000 && kilometers <= 10000) {
        switch (season) {
            case "Spring":
            case "Autumn":
                price = kilometers * 0.95 * 4;
                price -= price * 0.10;
                console.log(price.toFixed(2));
                break;

            case "Summer":
                price = kilometers * 1.10 * 4;
                price -= price * 0.10;
                console.log(price.toFixed(2));
                break;

            case "Winter":
                price = kilometers * 1.25 * 4;
                price -= price * 0.10;
                console.log(price.toFixed(2));
                break;
        }
    }
    else if (kilometers > 10000 && kilometers <= 20000){
        price = kilometers * 1.45 * 4;
        price -= price * 0.10;
        console.log(price.toFixed(2));
    }
}
truckDriver(["Spring", 16942])