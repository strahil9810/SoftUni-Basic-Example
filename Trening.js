function trening(input) {
    let days = Number(input[0]);
    let kilometerFirstDay = Number(input[1]);

    let bonusKilometer = 0;

    for (let i = 2; i < input.length; i++) {
        let percentKilometer = Number(input[i]);

        bonusKilometer = kilometerFirstDay + (kilometerFirstDay * percentKilometer / 100);
        days++;
    }

    console.log(Math.ceil(bonusKilometer));
}
trening([5, 30, 10, 15, 20, 5, 12])