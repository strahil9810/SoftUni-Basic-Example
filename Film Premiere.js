function filmPremiere(input) {
    let project = input[0];
    let filmPackets = input[1];
    let numberBilet = Number(input[2]);

    let price = 0;
    let allPrice = 0;

    switch (project) {
        case 'John Wick':
            if (filmPackets == "Drink") {
                price = 12;
            }
            else if (filmPackets == "Popcorn") {
                price = 15;
            }
            else if (filmPackets == "Menu") {
                price = 19;
            }
            break;

        case 'Star Wars':
            if (filmPackets == "Drink") {
                price = 18;
            }
            else if (filmPackets == "Popcorn") {
                price = 25;
            }
            else if (filmPackets == "Menu") {
                price = 30;
            }
            break;

        case 'Jumanji':
            if (filmPackets == "Drink") {
                price = 9;
            }
            else if (filmPackets == "Popcorn") {
                price = 11;
            }
            else if (filmPackets == "Menu") {
                price = 14;
            }
            break;
    }

    allPrice = numberBilet * price;

    if (project == "Star Wars" && numberBilet >= 4) {
        allPrice -= allPrice * 0.30;
    }
    else if (project == "Jumanji" && numberBilet == 2) {
        allPrice -= allPrice * 0.15;
    }

    console.log(`Your bill is ${allPrice.toFixed(2)} leva.`);
}
filmPremiere(["Star Wars", "Drink", 10])