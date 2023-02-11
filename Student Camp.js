function studentCamp(input) {
    let season = input[0];
    let groupType = input[1];
    let numberStudent = Number(input[2]);
    let numberDays = Number(input[3]);

    let price = 0;
    let sport = '';

    switch (season) {
        case "Spring":
            switch (groupType) {
                case "girls":
                    price = 7.20 * numberStudent * numberDays;
                    sport = 'Athletics';
                    break;

                case "boys":
                    price = 7.20 * numberStudent * numberDays;
                    sport = 'Tennis';
                    break;

                case "mixed":
                    price = 9.50 * numberStudent * numberDays;
                    sport = 'Cycling';
                    break;
            }
            break;

        case "Summer":
            switch (groupType) {
                case "girls":
                    price = 15 * numberStudent * numberDays;
                    sport = 'Volleyball';
                    break;

                case "boys":
                    price = 15 * numberStudent * numberDays;
                    sport = 'Football';
                    break;

                case "mixed":
                    price = 20 * numberStudent * numberDays;
                    sport = 'Swimming';
                    break;
            }
            break;

        case "Winter":
            switch (groupType) {
                case "girls":
                    price = 9.60 * numberStudent * numberDays;
                    sport = 'Gymnastics';
                    break;

                case "boys":
                    price = 9.60 * numberStudent * numberDays;
                    sport = 'Judo';
                    break;

                case "mixed":
                    price = 10 * numberStudent * numberDays;
                    sport = 'Ski';
                    break;
            }
            break;
    }

    if(numberStudent >= 50){
        price -= price * 0.50;
    }
    else if(numberStudent >= 20 && numberStudent < 50){
        price -= price * 0.15;
    }
    else if(numberStudent >= 10 && numberStudent < 20){
        price -= price * 0.05;
    }

    console.log(`${sport} ${price.toFixed(2)} lv.`);
}
studentCamp(['Spring', 'mixed', 17, 14])