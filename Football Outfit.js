function footballOutfit(input) {
    let priceTshirt = Number(input[0]);
    let priceToWinBall = Number(input[1]);

    let priceShorts = priceTshirt * 0.75;
    let priceSocks = priceShorts * 0.20;
    let priceButtons = (priceTshirt + priceShorts) * 2;

    let allPrice = priceTshirt + priceShorts + priceSocks + priceButtons;
    let priceAfterDiscount = allPrice - (allPrice * 0.15);

    if (priceAfterDiscount >= priceToWinBall) {
        console.log(`Yes, he will earn the world-cup replica ball!`);
        console.log(`His sum is ${priceAfterDiscount.toFixed(2)} lv.`);
    }
    else {
        let needsPrice = priceToWinBall - priceAfterDiscount;
        console.log(`No, he will not earn the world-cup replica ball.`);
        console.log(`He needs ${needsPrice.toFixed(2)} lv. more.`)
    }
}
footballOutfit([25, 100])