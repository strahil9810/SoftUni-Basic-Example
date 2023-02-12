function logistics(input){
    let numberCargo = Number(input.shift());
    let bus = 0;
    let percentBus = 0;
    let truck = 0;
    let percentTruck = 0
    let train = 0;
    let percentTrain = 0;
    let allCargoTons = 0;
    let price = 0;

    for(let index = 1; index <= numberCargo; index++){
        let cargoTons = Number(input.shift(index));

        if(cargoTons <= 3){
            bus += cargoTons;
        }
        else if(cargoTons >= 4 && cargoTons <= 11){
            truck += cargoTons;
        }
        else{
            train += cargoTons;
        }

        allCargoTons += cargoTons;
    }

    price = (bus * 200 + truck * 175 + train * 120) / allCargoTons;
    console.log(price.toFixed(2));

    percentBus = bus / allCargoTons * 100
    console.log(`${percentBus.toFixed(2)}%`);

    percentTruck = truck / allCargoTons * 100;
    console.log(`${percentTruck.toFixed(2)}%`);

    percentTrain = train / allCargoTons * 100;
    console.log(`${percentTrain.toFixed(2)}%`);
}
logistics([5, 2, 10, 20, 1, 7])