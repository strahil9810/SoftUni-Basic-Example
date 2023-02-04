function harvest(input) {
    let squard_meters_vineyard = Number(input[0]);
    let vineyard_for_one_squard_meters = Number(input[1]);
    let needed_liters_wine = Number(input[2]);
    let number_people_work = Number(input[3]);

    let all_vineyard = squard_meters_vineyard * vineyard_for_one_squard_meters;
    let wine = all_vineyard / 2.5 * 0.40;

    if (wine >= needed_liters_wine) {
        let left_wine = wine - needed_liters_wine;
        let wine_for_one_human = left_wine / number_people_work;
        console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`);
        console.log(`${Math.ceil(left_wine)} liters left -> ${Math.ceil(wine_for_one_human)} liters per person.`);
    }
    else {
        let needed_wine = needed_liters_wine - wine;
        console.log(`It will be a tough winter! More ${Math.floor(needed_wine)} liters wine needed.`);
    }
}
harvest([650, 2, 175, 3])