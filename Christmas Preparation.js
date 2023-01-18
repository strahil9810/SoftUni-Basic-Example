function christmasPreparation(input) {
    let wrappingPaper = Number(input[0]);
    let rollsFabric = Number(input[1]);
    let literGlue = Number(input[2]);
    let percentDiscount = Number(input[3]);

    let priceWrappingPaper = wrappingPaper * 5.80;
    let priceRollsFabric = rollsFabric * 7.20;
    let priceGlue = literGlue * 1.20;

    let price = priceWrappingPaper + priceRollsFabric + priceGlue;
    let priceAfterDiscount = price * percentDiscount / 100;
    let sum = price - priceAfterDiscount;

    console.log(sum.toFixed(3));
}
christmasPreparation([2, 3, 2.5, 25])