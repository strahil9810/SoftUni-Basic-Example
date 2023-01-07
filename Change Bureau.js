function changeBureau(input) {
    let bitcoins = Number(input[0]);
    let chinePrice = Number(input[1]);
    let commision = Number(input[2]);

    let bitcoinsToLeva = bitcoins * 1168;
    let chinePriceToUSD = chinePrice * 0.15;
    let USDToLeva = chinePriceToUSD * 1.76;

    let sumLeva = bitcoinsToLeva + USDToLeva;
    let sumLevaToEuro = sumLeva / 1.95;
    let sumAfterCommision = sumLevaToEuro - ((sumLevaToEuro * commision)/100);

    console.log(sumAfterCommision.toFixed(2));
}
changeBureau([20, 5678, 2.4])