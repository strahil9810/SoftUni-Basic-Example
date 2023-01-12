function easterGuests(input) {
    let numberPeople = Number(input[0]);
    let sum = Number(input[1]);

    let cake = Math.ceil(numberPeople / 3);
    let eggs = numberPeople * 2;
    let cakePrice = cake * 4;
    let eggsPrice = eggs * 0.45;
    let allSum = cakePrice + eggsPrice;

    if (allSum <= sum) {
        let leftPrice = sum - allSum;
        console.log(`Lyubo bought ${cake} Easter bread and ${eggs} eggs.`);
        console.log(`He has ${leftPrice.toFixed(2)} lv. left.`)
    }
    else {
        let needPrice = allSum - sum;
        console.log(`Lyubo doesn't have enough money.`);
        console.log(`He needs ${needPrice.toFixed(2)} lv. more.`)
    }
}
easterGuests([9, 12])