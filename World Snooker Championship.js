function worldSnookerChampionship(input) {
    let stageOfChampionship = input[0];
    let typeBilet = input[1];
    let numberBilet = Number(input[2]);
    let photos = input[3];

    let price = 0;
    let bonus = 0;

    switch (stageOfChampionship) {
        case "Quarter final":
            if (typeBilet == "Standard") {
                price = numberBilet * 55.50;
            }
            else if (typeBilet == "Premium") {
                price = numberBilet * 105.20;
            }
            else if (typeBilet == "VIP") {
                price = numberBilet * 118.90;
            }
            break;

        case "Semi final":
            if (typeBilet == "Standard") {
                price = numberBilet * 75.88;
            }
            else if (typeBilet == "Premium") {
                price = numberBilet * 125.22;
            }
            else if (typeBilet == "VIP") {
                price = numberBilet * 300.40;
            }
            break;

        case "Final":
            if (typeBilet == "Standard") {
                price = numberBilet * 110.10;
            }
            else if (typeBilet == "Premium") {
                price = numberBilet * 160.66;
            }
            else if (typeBilet == "VIP") {
                price = numberBilet * 400;
            }
            break;
    }

    if (price > 4000) {
        price -= price * 0.25;
        console.log(price.toFixed(2));
    }
    else if (price > 2500) {
        price -= price * 0.10;
        if (photos == "Y") {
            bonus = numberBilet * 40;
            price += bonus;
            console.log(price.toFixed(2));
        }
        else {
            console.log(price.toFixed(2));
        }
    }
    else {
        if (photos == "Y") {
            bonus = numberBilet * 40;
            price += bonus;
            console.log(price.toFixed(2));
        }
        else {
            console.log(price.toFixed(2));
        }
    }
}
worldSnookerChampionship(["Quarter final", "Standard", 11, "N"])