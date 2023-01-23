function serial(input) {
    let budget = Number(input[0]);
    let serialNumber = Number(input[1]);
    let price = 0;

    for (let i = 2; i < input.length; i += 2) {
        let serialName = input[i];
        let serialPrice = Number(input[i + 1]);

        if (serialName === "Thrones") {
            serialPrice -= serialPrice * 0.50;
        }
        else if (serialName === "Lucifer") {
            serialPrice -= serialPrice * 0.40;
        }
        else if (serialName === "Protector") {
            serialPrice -= serialPrice * 0.30;
        }
        else if (serialName === "TotalDrama") {
            serialPrice -= serialPrice * 0.20;
        }
        else if (serialName === "Area") {
            serialPrice -= serialPrice * 0.10;
        }
        price += serialPrice;
    }

    if (budget >= price) {
        let leftPrice = budget - price;
        console.log(`You bought all the series and left with ${leftPrice.toFixed(2)} lv.`);
    }
    else {
        let neededPrice = price - budget;
        console.log(`You need ${neededPrice.toFixed(2)} lv. more to buy the series!`);
    }
}
serial([10, 3, "Thrones", 5, "Riverdale", 5, "Gotham", 2])