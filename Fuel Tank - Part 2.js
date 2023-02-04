function fuelTank(input) {
    let type_fuel = input[0];
    let quantity = Number(input[1]);
    let discount_card = input[2];

    let diesel_price_for_liter = 2.33;
    let gasoline_price_for_liter = 2.22;
    let gas_price_for_liter = 0.93;

    let sum = 0;

    switch (type_fuel) {
        case "Diesel":

            if(discount_card === "Yes"){
                diesel_price_for_liter -= 0.12;
            }
            
            sum = diesel_price_for_liter * quantity;

            if(quantity >= 20 && quantity <= 25){
                sum -= sum * 0.08;
            }
            else if(quantity > 25){
                sum -= sum * 0.10;
            }

            console.log(`${sum.toFixed(2)} lv.`);
            break;

        case "Gasoline":
            if(discount_card === "Yes"){
                gasoline_price_for_liter -= 0.18;
            }

            sum = gasoline_price_for_liter * quantity;

            if(quantity >= 20 && quantity <= 25){
                sum -= sum * 0.08;
            }
            else if(quantity > 25){
                sum -= sum * 0.10;
            }

            console.log(`${sum.toFixed(2)} lv.`);
            break;

        case "Gas":
            if(discount_card === "Yes"){
                gas_price_for_liter -= 0.08;
            }

            sum = gas_price_for_liter * quantity;

            if(quantity >= 20 && quantity <= 25){
                sum -= sum * 0.08;
            }
            else if(quantity > 25){
                sum -= sum * 0.10;
            }

            console.log(`${sum.toFixed(2)} lv.`);
            break;
    }
}
fuelTank(["Gasoline", 25, "No"])