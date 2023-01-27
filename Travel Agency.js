function travelAgency(input) {
    let name_town = input[0];
    let type_packet = input[1];
    let VIP = input[2];
    let days = Number(input[3]);
    let price = 0;
    let all_price = 0;
    let invalidCase = false;

    switch (name_town) {
        case "Bansko":
        case "Borovets":

            switch (type_packet) {
                case "withEquipment":
                    price = 100;

                    if (VIP === "yes") {
                        price -= price * 0.10;
                    }
                    break;

                case "noEquipment":
                    price = 80;

                    if (VIP === "yes") {
                        price -= price * 0.05;
                    }
                    break;

                default:
                    console.log("Invalid input!");
                    invalidCase = true;
                    break;
            }
            break;

        case "Varna":
        case "Burgas":

            switch (type_packet) {
                case "withBreakfast":
                    price = 130;

                    if (VIP === "yes") {
                        price -= price * 0.12;
                    }
                    break;

                case "noBreakfast":
                    price = 100;

                    if (VIP === "yes") {
                        price -= price * 0.07;
                    }
                    break;

                default:
                    console.log("Invalid input!");
                    invalidCase = true;
                    break;
            }
            break;

        default:
            console.log("Invalid input!");
            invalidCase = true;
            break;
    }

    if (days > 7) {
        all_price = price * 7;
        days -= 1;
    }

    all_price = days * price;

    if (invalidCase === false) {
        if (days >= 1) {
            console.log(`The price is ${all_price.toFixed(2)}lv! Have a nice time!`)
        }
        else {
            console.log("Days must be positive number!");
        }
    }
}
travelAgency(["Varna", "dsa", "yes", 5])