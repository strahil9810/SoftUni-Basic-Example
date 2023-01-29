function club(input) {
    let wanted_price = Number(input[0]);
    let price_order = 0;
    let all_price = 0;

    for (let i = 1; i < input.length; i += 2) {
        let name_dring = input[i];
        let quantity_dring = Number(input[i + 1]);

        if (name_dring === "Party!") {
            break;
        }

        price_order = name_dring.length * quantity_dring;

        if (price_order % 2 !== 0) {
            price_order -= price_order * 0.25;
        }

        all_price += price_order;
    }


    if (all_price >= wanted_price) {
        console.log("Target acquired.");
        console.log(`Club income - ${all_price.toFixed(2)} leva.`);
    }
    else {
        let needed_price = wanted_price - all_price;
        console.log(`We need ${needed_price.toFixed(2)} leva more.`);
        console.log(`Club income - ${all_price.toFixed(2)} leva.`);
    }
}
club(["100",
    "Sidecar",
    "7",
    "Mojito",
    "5",
    "White Russian",
    "10"])