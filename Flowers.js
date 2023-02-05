function flowers(input) {
    let number_buying_chrysanthemums = Number(input[0]);
    let number_buying_roses = Number(input[1]);
    let number_buying_tulips = Number(input[2]);
    let season = input[3];
    let holiday_day_or_not = input[4];

    let price = 0;
    let all_flower = number_buying_chrysanthemums + number_buying_roses + number_buying_tulips;

    switch (season) {
        case "Spring":
            price = number_buying_chrysanthemums * 2 + number_buying_roses * 4.10 + number_buying_tulips * 2.50;
            
            if(holiday_day_or_not === 'Y'){
                price += price * 0.15;
            }

            if(number_buying_tulips > 7){
                price -= price * 0.05;
            }

            if(all_flower > 20){
                price -= price * 0.20;
            }
            price += 2;
            console.log(price.toFixed(2));
            break;

        case "Summer":
            price = number_buying_chrysanthemums * 2 + number_buying_roses * 4.10 + number_buying_tulips * 2.50;

            if(holiday_day_or_not === 'Y'){
                price += price * 0.15;
            }

            if(all_flower > 20){
                price -= price * 0.20;
            }
            price += 2;
            console.log(price.toFixed(2));
            break;

        case "Autumn":
            price = number_buying_chrysanthemums * 3.75 + number_buying_roses * 4.50 + number_buying_tulips * 4.15;

            if(holiday_day_or_not === 'Y'){
                price += price * 0.15;
            }

            if(all_flower > 20){
                price -= price * 0.20;
            }
            price += 2;
            console.log(price.toFixed(2));
            break;

        case "Winter":
            price = number_buying_chrysanthemums * 3.75 + number_buying_roses * 4.50 + number_buying_tulips * 4.15;
            if(holiday_day_or_not === 'Y'){
                price += price * 0.15;
            }

            if(number_buying_roses >= 10){
                price -= price * 0.10;
            }

            if(all_flower > 20){
                price -= price * 0.20;
            }
            price += 2;
            console.log(price.toFixed(2));
            break;
    }
}
flowers([3, 10, 9, "Winter", "N"])