function cinema(input) {
    let cinemaCapasitet = Number(input[0]);
    let allPeople = 0;
    let price = 0;
    let sum = 0;

    for (let i = 1; i < input.length; i++) {

        if (input[i] !== "Movie time!") {

            let peopleNumber = Number(input[i]);
            allPeople += peopleNumber;

            price = peopleNumber * 5;

            if (peopleNumber % 3 === 0) {
                price -= 5;
            }

            sum += price;

            if (allPeople > cinemaCapasitet) {
                sum -= price;
                break;
            }
        }
    }
    if (allPeople > cinemaCapasitet) {
        console.log("The cinema is full.");
    }
    else {
        let leftPlaces = cinemaCapasitet - allPeople;
        console.log(`There are ${leftPlaces} seats left in the cinema.`);
    }
    console.log(`Cinema income - ${sum} lv.`);
}
cinema([60, 10, 6, 3, 20, 15, "Movie time!"])