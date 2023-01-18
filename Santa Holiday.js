function santaHoliday(input) {
    let numberDay = Number(input[0]);
    let typeRoom = input[1];
    let assessment = input[2];

    let price = 0;

    switch (typeRoom) {
        case 'room for one person':
            price = (numberDay - 1) * 18;
            break;

        case 'apartment':
            if (numberDay < 10) {
                price = (numberDay - 1) * 25;
                price -= price * 0.30;
            }
            else if (numberDay >= 10 && numberDay <= 15) {
                price = (numberDay - 1) * 25;
                price -= price * 0.35;
            }
            else if (numberDay > 15) {
                price = (numberDay - 1) * 25;
                price -= price * 0.50;
            }
            break;

        case 'president apartment':
            if (numberDay < 10) {
                price = (numberDay - 1) * 25;
                price -= price * 0.10;
            }
            else if (numberDay >= 10 && numberDay <= 15) {
                price = (numberDay - 1) * 25;
                price -= price * 0.15;
            }
            else if (numberDay > 15) {
                price = (numberDay - 1) * 25;
                price -= price * 0.20;
            }
            break;
    }

    if (assessment == "positive") {
        price += price * 0.25;
    }
    else {
        price -= price * 0.10;
    }
    console.log(price.toFixed(2));
}
santaHoliday([5, "room for one person", "positive"])