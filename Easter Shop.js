function easterShop(input) {
    let firstQuantityEggs = Number(input[0]);
    let result = 0;

    for (let i = 1; i < input.length; i += 2) {
        let buyOrFill = input[i];
        let numberEggs = Number(input[i + 1]);

        if (buyOrFill == "Close") {
            console.log(`Store is closed!`);
            console.log(`${result} eggs sold.`);
            break;
        }

        if (buyOrFill == "Buy") {
            if (firstQuantityEggs < numberEggs) {
                console.log(`Not enough eggs in store!`);
                console.log(`You can buy only ${firstQuantityEggs}.`);
                break;
            }
            result += numberEggs;
            firstQuantityEggs -= numberEggs;
        }

        if (buyOrFill == "Fill") {
            firstQuantityEggs += numberEggs;
        }
    }
}
easterShop([13, "Buy", 8, "Fill", 3, "Buy", 10])