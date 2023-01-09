function fitnessCard(input) {
    let price = Number(input[0]);
    let sex = input[1];
    let age = Number(input[2]);
    let sport = input[3];

    let sportPrice = 0;

    switch (sport) {
        case 'Gym':
            if (sex == 'm') {
                sportPrice = 42;
            }
            else if (sex == 'f') {
                sportPrice = 35;
            }

            if (age <= 19) {
                sportPrice -= sportPrice * 0.20;
            }

            if (sportPrice > price) {
                console.log(`You don't have enough money! You need $${(sportPrice - price).toFixed(2)} more.`);
            }
            else {
                console.log(`You purchased a 1 month pass for ${sport}.`);
            }
            break;

        case 'Boxing':
            if (sex == 'm') {
                sportPrice = 41;
            }
            else if (sex == 'f') {
                sportPrice = 37;
            }

            if (age <= 19) {
                sportPrice -= sportPrice * 0.20;
            }

            if (sportPrice > price) {
                console.log(`You don't have enough money! You need $${(sportPrice - price).toFixed(2)} more.`);
            }
            else {
                console.log(`You purchased a 1 month pass for ${sport}.`);
            }
            break;

        case 'Yoga':
            if (sex == 'm') {
                sportPrice = 45;
            }
            else if (sex == 'f') {
                sportPrice = 42;
            }

            if (age <= 19) {
                sportPrice -= sportPrice * 0.20;
            }

            if (sportPrice > price) {
                console.log(`You don't have enough money! You need $${(sportPrice - price).toFixed(2)} more.`);
            }
            else {
                console.log(`You purchased a 1 month pass for ${sport}.`);
            }
            break;

        case 'Zumba':
            if (sex == 'm') {
                sportPrice = 34;
            }
            else if (sex == 'f') {
                sportPrice = 31;
            }

            if (age <= 19) {
                sportPrice -= sportPrice * 0.20;
            }

            if (sportPrice > price) {
                console.log(`You don't have enough money! You need $${(sportPrice - price).toFixed(2)} more.`);
            }
            else {
                console.log(`You purchased a 1 month pass for ${sport}.`);
            }
            break;

        case 'Damces':
            if (sex == 'm') {
                sportPrice = 51;
            }
            else if (sex == 'f') {
                sportPrice = 53;
            }

            if (age <= 19) {
                sportPrice -= sportPrice * 0.20;
            }

            if (sportPrice > price) {
                console.log(`You don't have enough money! You need $${(sportPrice - price).toFixed(2)} more.`);
            }
            else {
                console.log(`You purchased a 1 month pass for ${sport}.`);
            }
            break;

        case 'Pilates':
            if (sex == 'm') {
                sportPrice = 39;
            }
            else if (sex == 'f') {
                sportPrice = 37;
            }

            if (age <= 19) {
                sportPrice -= sportPrice * 0.20;
            }

            if (sportPrice > price) {
                console.log(`You don't have enough money! You need $${(sportPrice - price).toFixed(2)} more.`);
            }
            else {
                console.log(`You purchased a 1 month pass for ${sport}.`);
            }
            break;
    }
}
fitnessCard([38,
    "m",
    0,
    "Pilates"])