function carToGo(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let price = 0;
    let type_cabrio = "Cabrio";
    let type_jeep = "Jeep";

    if (budget <= 100) {

        console.log(`Economy class`);

        switch (season) {
            case "Summer":
                price = budget * 0.35;
                console.log(`${type_cabrio} - ${price.toFixed(2)}`);
                break;

            case "Winter":
                price = budget * 0.65;
                console.log(`${type_jeep} - ${price.toFixed(2)}`);
                break;
        }
    }
    else if (budget > 100 && budget <= 500) {

        console.log("Compact class");

        switch (season) {
            case "Summer":
                price = budget * 0.45;
                console.log(`${type_cabrio} - ${price.toFixed(2)}`);
                break;

            case "Winter":
                price = budget * 0.80;
                console.log(`${type_jeep} - ${price.toFixed(2)}`);
                break;
        }
    }
    else if(budget > 500){
        console.log("Luxury class");
        price = budget * 0.90;
        console.log(`${type_jeep} - ${price.toFixed(2)}`);
    }
}
carToGo([450, "Winter"])