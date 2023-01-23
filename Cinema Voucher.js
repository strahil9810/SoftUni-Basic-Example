function solve(input) {
    let index = 0;
    let voucherPrice = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let tickets = 0;
    let others = 0;
    let price1 = 0;
    let price2 = 0;
    
    while (command !== 'End') {
        if (command.length > 8) {
            tickets++;
            price1 = command.charCodeAt(0) + command.charCodeAt(1);
            price2 = 0;
        } else if (command.length <= 8) {
            others++;
            price1 = 0;
            price2 = command.charCodeAt(0);
        }

        if (price1 > voucherPrice) {
            console.log(`${tickets - 1}`);
            console.log(`${others}`);
            return;
        }

        if (price2 > voucherPrice) {
            console.log(`${tickets}`);
            console.log(`${others - 1}`);
            return;
        }

        voucherPrice -= price1 + price2;
        command = input[index];
        index++;
    }

    console.log(`${tickets}`);
    console.log(`${others}`);
}
solve(["300",
    "Captain Marvel",
    "popcorn",
    "Pepsi"])
