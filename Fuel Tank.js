function fuelTank(input) {
    let type_fuel = input[0];
    let quantity = Number(input[1]);

    switch (type_fuel) {
        case "Diesel":
        case "Gasoline":
        case "Gas":
            if (quantity >= 25) {
                console.log(`You have enough ${type_fuel.toLowerCase()}.`);
            }
            else {
                console.log(`Fill your tank with ${type_fuel.toLowerCase()}!`);
            }
            break;

        default:
            console.log(`Invalid fuel!`);
            break;
    }
}
fuelTank(["Gasoline", 40])