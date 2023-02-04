function pets(input) {
    let number_days = Number(input[0]);
    let food_kilograms = Number(input[1]);
    let dog_food_for_one_day = Number(input[2]);
    let cat_food_for_one_day = Number(input[3]);
    let food_turtle_grams = Number(input[4]);

    let need_food_for_dog = number_days * dog_food_for_one_day;
    let need_food_for_cat = number_days * cat_food_for_one_day;
    let need_food_for_turtle = number_days * food_turtle_grams / 1000;

    let all_food = need_food_for_dog + need_food_for_cat + need_food_for_turtle;

    if (all_food < food_kilograms) {
        let left_food = Math.floor(food_kilograms - all_food);
        console.log(`${left_food} kilos of food left.`);
    }
    else {
        let need_food = Math.ceil(all_food - food_kilograms);
        console.log(`${need_food} more kilos of food are needed.`);
    }
}
pets([5, 10, 2.1, 0.8, 321])