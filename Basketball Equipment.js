function basketball(input) {
    let yearPrice = Number(input[0]);

    let basketballShoots = yearPrice - (yearPrice * 0.40);
    let basketballUniform = basketballShoots - (basketballShoots * 0.20);
    let basketballBall = basketballUniform / 4;
    let basketballAccessoar = basketballBall / 5;
    let price = yearPrice + basketballShoots + basketballUniform + basketballBall + basketballAccessoar;

    console.log(price.toFixed(2));
}
basketball([320])