function poolDay(input){
    let numberPeople = Number(input[0]);
    let price = Number(input[1]);
    let priceSunLounger = Number(input[2]);
    let priceUmbrella = Number(input[3]);

    let allPrice = numberPeople * price;
    let peopleOnSunLounger = Math.ceil(numberPeople * 0.75);
    let pricePeopleOnSunLounger = peopleOnSunLounger * priceSunLounger;
    let halfPeopleUmbrella = Math.ceil(numberPeople * 0.50);
    let pricePeopleUmbrella = halfPeopleUmbrella * priceUmbrella;

    let sum = allPrice + pricePeopleOnSunLounger + pricePeopleUmbrella;

    console.log(`${sum.toFixed(2)} lv.`);
}
poolDay([50, 6, 8, 4])