function bikeRace(input) {
    let number_junior_bikers = Number(input[0]);
    let number_seniors_bikers = Number(input[1]);
    let type_race = input[2];

    let price = 0;

    switch (type_race) {
        case "trail":
            price = number_junior_bikers * 5.50 + number_seniors_bikers * 7;
            price -= price * 0.05;
            break;

        case "cross-country":
            price = number_junior_bikers * 8 + number_seniors_bikers * 9.50;
            price -= price * 0.05;

            if (number_junior_bikers + number_seniors_bikers >= 50) {
                price -= price * 0.25;
            }
            break;

        case "downhill":
            price = number_junior_bikers * 12.25 + number_seniors_bikers * 13.75;
            price -= price * 0.05;
            break;

        case "road":
            price = number_junior_bikers * 20 + number_seniors_bikers * 21.50;
            price -= price * 0.05;
    }
    console.log(price.toFixed(2));
}
bikeRace([30, 25, "cross-country"])