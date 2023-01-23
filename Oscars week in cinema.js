function oscarsWeek(input) {
    let filmName = input[0];
    let typeRoom = input[1];
    let numberTicket = Number(input[2]);
    let price = 0;

    switch (filmName) {
        case "A Star Is Born":
            switch (typeRoom) {
                case "normal":
                    price = numberTicket * 7.50;
                    break;

                case "luxury":
                    price = numberTicket * 10.50;
                    break;

                case "ultra luxury":
                    price = numberTicket * 13.50;
                    break;
            }
            break;

        case "Bohemian Rhapsody":
            switch (typeRoom) {
                case "normal":
                    price = numberTicket * 7.35;
                    break;

                case "luxury":
                    price = numberTicket * 9.45;
                    break;

                case "ultra luxury":
                    price = numberTicket * 12.75;
                    break;
            }
            break;

        case "Green Book":
            switch (typeRoom) {
                case "normal":
                    price = numberTicket * 8.15;
                    break;

                case "luxury":
                    price = numberTicket * 10.25;
                    break;

                case "ultra luxury":
                    price = numberTicket * 13.25;
                    break;
            }
            break;

        case "The Favourite":
            switch (typeRoom) {
                case "normal":
                    price = numberTicket * 8.75;
                    break;

                case "luxury":
                    price = numberTicket * 11.55;
                    break;

                case "ultra luxury":
                    price = numberTicket * 13.95;
                    break;
            }
            break;
    }

    console.log(`${filmName} -> ${price.toFixed(2)} lv.`);
}
oscarsWeek(["Green Book", "normal", 63])