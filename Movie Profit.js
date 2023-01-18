function movieProfit(input) {
    let filmName = input[0];
    let numberDays = Number(input[1]);
    let numberBilets = Number(input[2]);
    let biletPrice = Number(input[3]);
    let cinemaPercent = Number(input[4]);

    let biletPriceForOneDay = numberBilets * biletPrice;
    let priceForAllTime = numberDays * biletPriceForOneDay;
    let priceForCinema = priceForAllTime * cinemaPercent / 100;

    let allPrice = priceForAllTime - priceForCinema;

    console.log(`The profit from the movie ${filmName} is ${allPrice.toFixed(2)} lv.`);
}
movieProfit(["The Programmer", 20, 500, 7.50, 7])