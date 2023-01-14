function easterBake(input) {
    let numberCake = Number(input[0]);
    let sugarResult = 0;
    let index = 1;
    let flourResult = 0;
    let sugarPackets = 0;
    let flourPackets = 0;
    let maxSugar = 0;
    let maxFlour = 0;

    for (let i = 1; i <= numberCake; i++) {
        let sugar = Number(input[index++]);
        let flour = Number(input[index++]);

        sugarResult += sugar;
        flourResult += flour;

        if (sugar > maxSugar) {
            maxSugar = sugar;
        }

        if (flour > maxFlour) {
            maxFlour = flour;
        }
    }

    sugarPackets = Math.ceil(sugarResult / 950);
    flourPackets = Math.ceil(flourResult / 750);

    console.log(`Sugar: ${sugarPackets}`);
    console.log(`Flour: ${flourPackets}`);
    console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`);
}
easterBake([3,
    400,
    350,
    250,
    300,
    450,
    380, ''])