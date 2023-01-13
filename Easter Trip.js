function esterTrip(input) {
    let destination = input[0];
    let dateReservation = input[1];
    let numberNight = Number(input[2]);
    let price = 0;

    switch (destination) {
        case "France":
            if (dateReservation == "21-23") {
                price = numberNight * 30;
            }
            else if (dateReservation == "24-27") {
                price = numberNight * 35;
            }
            else if (dateReservation == "28-31") {
                price = numberNight * 40;
            }
            console.log(`Easter trip to ${destination} : ${price.toFixed(2)} leva.`);
            break;

        case "Italy":
            if (dateReservation == "21-23") {
                price = numberNight * 28;
            }
            else if (dateReservation == "24-27") {
                price = numberNight * 32;
            }
            else if (dateReservation == "28-31") {
                price = numberNight * 39;
            }
            console.log(`Easter trip to ${destination} : ${price.toFixed(2)} leva.`);
            break;

        case "Germany":
            if (dateReservation == "21-23") {
                price = numberNight * 32;
            }
            else if (dateReservation == "24-27") {
                price = numberNight * 37;
            }
            else if (dateReservation == "28-31") {
                price = numberNight * 43;
            }
            console.log(`Easter trip to ${destination} : ${price.toFixed(2)} leva.`);
            break;
    }
}
esterTrip(["Germany", "24-27", 5])