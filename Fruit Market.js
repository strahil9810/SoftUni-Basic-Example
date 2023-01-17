function fruitMarket(strawberryPrice, bananaAmount, orangeAmount, blueberryAmount, strawberryAmount) {
    let raspberryPriceForKg = strawberryPrice / 2;
    let prostocalPriceForKg = raspberryPriceForKg * 0.6;
    let bananasPriceForKG = raspberryPriceForKg * 0.2;

    let raspberryPrice = blueberryAmount * raspberryPriceForKg;
    let portocalPrice = orangeAmount * prostocalPriceForKg;
    let bananasPrice = bananaAmount* bananasPriceForKG;
    let allstrawberryPrice = strawberryAmount * strawberryPrice;

    let allSum = raspberryPrice + portocalPrice + bananasPrice + allstrawberryPrice;


    console.log(allSum);
}
fruitMarket(48,
    10,
    3.3,
    6.5,
    1.7,
)