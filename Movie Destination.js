function moveiDestination(input) {
    let budget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let numberDays = Number(input[3]);

    let price = 0;
    let allPrice = 0;

    switch (destination) {
        case 'Dubai':
            if (season == "Winter") {
                price = 45000;
            }
            else if (season == "Summer") {
                price = 40000;
            }
            break;

        case 'Sofia':
            if (season == "Winter") {
                price = 17000;
            }
            else if (season == "Summer") {
                price = 12500;
            }
            break;

        case 'London':
            if (season == "Winter") {
                price = 24000;
            }
            else if (season == "Summer") {
                price = 20250;
            }
            break;
    }

    allPrice = numberDays * price;

    if (destination == "Dubai") {
        allPrice -= allPrice * 0.30;
    }
    else if (destination == "Sofia") {
        allPrice += allPrice * 0.25;
    }

    if (allPrice >= budget) {
        let neededPrice = allPrice - budget;
        console.log(`The director needs ${neededPrice.toFixed(2)} leva more!`);
    }
    else {
        let leftPrice = budget - allPrice;
        console.log(`The budget for the movie is enough! We have ${leftPrice.toFixed(2)} leva left!`);
    }
}
moveiDestination([1000000, "Dubai", "Summer", 5])