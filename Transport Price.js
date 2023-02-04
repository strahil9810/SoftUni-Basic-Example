function transportPrice(input) {
    let kilometer = Number(input[0]);
    let day_or_night = input[1];
    let taxi_price = 0;
    let bus_price = 0;
    let train_price = 0;

    if (kilometer < 20) {
        if(day_or_night == "day"){
            taxi_price = 0.70 + kilometer * 0.79;
            console.log(taxi_price.toFixed(2));
        }
        else{
            taxi_price = 0.70 + kilometer * 0.90;
            console.log(taxi_price.toFixed(2));
        }
    }
    else if (kilometer >= 20 && kilometer < 100) {
        bus_price = kilometer * 0.09;
        console.log(bus_price.toFixed(2));
    }
    else if (kilometer >= 100) {
        train_price = kilometer * 0.06;
        console.log(train_price.toFixed(2));
    }
}
transportPrice([180, "night"])