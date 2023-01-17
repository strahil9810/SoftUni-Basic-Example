function parking(input) {
    let numberDays = Number(input[0]);
    let hourOfDays = Number(input[1]);

    let price = 0;

    for (let i = 1; i <= numberDays; i++) {
        let hourPrice = 0;
        let dayPrice = 0;

        for (let j = 1; j <= hourOfDays; j++) {
            if (i % 2 == 0 && j % 2 != 0) {
                hourPrice = 2.50;
            }
            else if (i % 2 != 0 && j % 2 == 0) {
                hourPrice = 1.25;
            }
            else {
                hourPrice = 1;
            }

            price += hourPrice;
            dayPrice += hourPrice;
        }
        console.log(`Day: ${i} - ${dayPrice.toFixed(2)} leva`);
    }
    console.log(`Total: ${price.toFixed(2)} leva`);
}
parking([2, 5])