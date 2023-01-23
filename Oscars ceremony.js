function oscarCeremony(input) {
    let roomPrice = Number(input[0]);
    let statuettesPrice = roomPrice - (roomPrice * 0.30);
    let ketteringPrice = statuettesPrice - (statuettesPrice * 0.15);
    let voicePrice = ketteringPrice / 2;

    let allPrice = roomPrice + statuettesPrice + ketteringPrice + voicePrice;

    console.log(allPrice.toFixed(2));
}
oscarCeremony([5555])