function bills(input){
    let month = Number(input.shift());
    let priceWaterForMonth = 20;
    let priceWater = priceWaterForMonth * month;
    let priceInternetForMonth = 15;
    let priceInternet = priceInternetForMonth * month;
    let priceEnergy = 0;
    let otherPrice = 0;


    for(let index = 0; index < month; index++){
        let priceEnergyForMonth = Number(input.shift(index));
        let otherPriceForMonth = priceEnergyForMonth + priceWaterForMonth + priceInternetForMonth;

        priceEnergy += priceEnergyForMonth;

        otherPrice += otherPriceForMonth + (otherPriceForMonth * 0.20);
    }

    console.log(`Electricity: ${priceEnergy.toFixed(2)} lv`);
    console.log(`Water: ${priceWater.toFixed(2)} lv`);
    console.log(`Internet: ${priceInternet.toFixed(2)} lv`);
    console.log(`Other: ${otherPrice.toFixed(2)} lv`);

    let everagePrice = (priceEnergy + priceInternet + priceWater + otherPrice) / month;
    console.log(`Average: ${everagePrice.toFixed(2)} lv`);
}
bills([8, 123.54, 231.54, 140.23, 100, 122.40, 430, 178.52, 64.20])