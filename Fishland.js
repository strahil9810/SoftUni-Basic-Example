function fishland(input){
    let mackerel_price_kilogram = Number(input[0]);
    let sprinkle_price_kilogram = Number(input[1]);
    let bonito_kilogram = Number(input[2]);
    let safrid_kilogram = Number(input[3]);
    let mussels_kilogram = Number(input[4]);

    let bonito_price_kilogram = mackerel_price_kilogram + (mackerel_price_kilogram * 0.60);
    let bonito_price = bonito_kilogram * bonito_price_kilogram;

    let safrid_price_kilogram = sprinkle_price_kilogram + (sprinkle_price_kilogram * 0.80);
    let safrid_price = safrid_kilogram * safrid_price_kilogram;

    let mussels_price = mussels_kilogram * 7.50;
    let all_sum = bonito_price + safrid_price + mussels_price;

    console.log(all_sum.toFixed(2))
}
fishland([6.90, 4.20, 1.5, 2.5, 1])