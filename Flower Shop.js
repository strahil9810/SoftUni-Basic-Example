function flowerShop(input) {
    let number_magnolies = Number(input[0]);
    let number_zumbuls = Number(input[1]);
    let number_roses = Number(input[2]);
    let number_kaktus = Number(input[3]);
    let price_gift = Number(input[4]);
    let price_magnolies = 3.25;
    let price_zumbuls = 4;
    let price_roses = 3.50;
    let price_kaktus = 8;

    let all_price_magnolies = number_magnolies * price_magnolies;
    let all_price_zumbuls = number_zumbuls * price_zumbuls;
    let all_price_roses = number_roses * price_roses;
    let all_price_kaktus = number_kaktus * price_kaktus;

    let all_price = all_price_magnolies + all_price_zumbuls + all_price_roses + all_price_kaktus;
    let price_after_tax = all_price - (all_price * 0.05);

    if (price_after_tax >= price_gift) {
        let left_price = Math.floor(price_after_tax - price_gift);
        console.log(`She is left with ${left_price} leva.`);
    }
    else {
        let needed_price = Math.ceil(price_gift - price_after_tax);
        console.log(`She will have to borrow ${needed_price} leva.`);
    }
}
flowerShop([15, 7, 5, 10, 100])