function coffeeMachine(input) {
    let type_dring = input[0];
    let sugar = input[1];
    let number_drings = Number(input[2]);
    let price = 0;

    switch (type_dring) {
        case "Espresso":
            switch (sugar) {
                case "Without":
                    price = number_drings * 0.90;
                    price -= price * 0.35;
                    break;

                case "Normal":
                    price = number_drings * 1;
                    break;

                case "Extra":
                    price = number_drings * 1.20;
                    break;
            }
            if (number_drings >= 5) {
                price -= price * 0.25;
            }
            break;

        case "Cappuccino":
            switch (sugar) {
                case "Without":
                    price = number_drings * 1;
                    price -= price * 0.35;
                    break;

                case "Normal":
                    price = number_drings * 1.20;
                    break;

                case "Extra":
                    price = number_drings * 1.60;
                    break;
            }
            break;

        case "Tea":
            switch (sugar) {
                case "Without":
                    price = number_drings * 0.50;
                    price -= price * 0.35;
                    break;

                case "Normal":
                    price = number_drings * 0.60;
                    break;

                case "Extra":
                    price = number_drings * 0.70;
                    break;
            }
            break;
    }

    if (price > 15) {
        price -= price * 0.20;
    }
    console.log(`You bought ${number_drings} cups of ${type_dring} for ${price.toFixed(2)} lv.`);
}
coffeeMachine(["Tea", "Extra", 3])