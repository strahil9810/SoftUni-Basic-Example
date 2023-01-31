function vegetableMarket(input){
    let vegetable_price = Number(input[0]);
    let fruit_price = Number(input[1]);
    let vegetable_kilogram = Number(input[2]);
    let fruit_kilogram = Number(input[3]);

    let all_vegetable_price = vegetable_price * vegetable_kilogram;
    let all_fruit_price = fruit_price * fruit_kilogram;

    let all_sum = all_vegetable_price + all_fruit_price;
    let sum_euro = all_sum / 1.94;

    console.log(sum_euro.toFixed(2));
}
vegetableMarket([0.194, 19.4, 10, 10])