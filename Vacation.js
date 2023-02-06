function vacation(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let price = 0;

    if (budget <= 1000) {
        switch (season) {
            case "Summer":
                price = budget * 0.65;
                console.log(`Alaska - Camp - ${price.toFixed(2)}`);
                break;

            case "Winter":
                price = budget * 0.45;
                console.log(`Morocco - Camp - ${price.toFixed(2)}`);
                break;
        }
    }
    else if (budget > 1000 && budget <= 3000) {
        switch (season) {
            case "Summer":
                price = budget * 0.80;
                console.log(`Alaska - Hut - ${price.toFixed(2)}`);
                break;

            case "Winter":
                price = budget * 0.60;
                console.log(`Morocco - Hut - ${price.toFixed(2)}`);
                break;
        }
    }
    else {
        switch (season) {
            case "Summer":
                price = budget * 0.90;
                console.log(`Alaska - Hotel - ${price.toFixed(2)}`);
                break;

            case "Winter":
                price = budget * 0.90;
                console.log(`Morocco - Hotel - ${price.toFixed(2)}`);
                break;
        }
    }
}
vacation([799.50, "Winter"])