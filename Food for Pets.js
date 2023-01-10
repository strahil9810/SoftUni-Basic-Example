function foodPets(input) {
    let days = Number(input[0]);
    let totalQuantityFood = Number(input[1]);
    let dogEat = 0;
    let catEat = 0;
    let allEat = 0;
    let bonus = 0;
    let percent = 0;
    let percentDog = 0;
    let percentCat = 0;

    let firstDay = 2;

    for (let i = 1; i <= days; i++) {

        let dog = Number(input[firstDay]);
        dogEat += dog;

        let cat = Number(input[firstDay + 1]);
        catEat += cat;

        if (i % 3 == 0) {
            bonus += (dog + cat) * 0.10;
        }

        firstDay += 2;
    }
    allEat = dogEat + catEat;
    percent = (allEat * 100) / totalQuantityFood;
    percentDog = (dogEat / allEat) * 100;
    percentCat = (catEat / allEat) * 100;
    
    console.log(`Total eaten biscuits: ${Math.round(bonus)}gr.`);
    console.log(`${percent.toFixed(2)}% of the food has been eaten.`);
    console.log(`${percentDog.toFixed(2)}% eaten from the dog.`);
    console.log(`${percentCat.toFixed(2)}% eaten from the cat.`);
}
foodPets([3, 500, 100, 30, 110, 25, 120, 35])