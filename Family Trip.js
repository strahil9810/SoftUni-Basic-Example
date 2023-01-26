function familyTrip(input) {
    let budget = Number(input[0]);
    let number_days = Number(input[1]);
    let days_price = Number(input[2]);
    let percent_additional_costs = Number(input[3]);
    let price_all_days = 0;

    if (number_days > 7) {
        days_price = days_price - (days_price * 0.05);
    }

    let additional_costs_price = (percent_additional_costs * budget) / 100;
    price_all_days = number_days * days_price;

    let all_sum = price_all_days + additional_costs_price;

    if (all_sum <= budget) {
        let left_price = budget - all_sum;
        console.log(`Ivanovi will be left with ${left_price.toFixed(2)} leva after vacation.`);
    }
    else {
        let neede_price = all_sum - budget;
        console.log(`${neede_price.toFixed(2)} leva needed.`);
    }
}
familyTrip([500, 7, 66, 15])