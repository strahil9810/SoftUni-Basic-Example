function reportSystem(input) {
    let neededPrice = Number(input.shift());
    let collectedPrice = 0;
    let sumWithCard = 0;
    let sumWithCash = 0;
    let cashPerson = 0;
    let cardPerson = 0;
    let command = input.shift();

    let index = 1;
    while (command !== 'End') {
        let price = Number(command);

        if (index % 2 !== 0) {
            if (price <= 100) {
                console.log('Product sold!');
                sumWithCash += price;
                cashPerson++;
            }
            else {
                console.log('Error in transaction!');
            }
        }
        else {
            if (price >= 10) {
                console.log('Product sold!');
                sumWithCard += price;
                cardPerson++;
            }
            else {
                console.log('Error in transaction!');
            }
        }

        collectedPrice = sumWithCard + sumWithCash;

        if (collectedPrice >= neededPrice) {
            console.log(`Average CS: ${(sumWithCash / cashPerson).toFixed(2)}`);
            console.log(`Average CC: ${(sumWithCard / cardPerson).toFixed(2)}`);
            return;
        }

        index++;
        command = input.shift();
    }

    console.log('Failed to collect required money for charity.');
}
reportSystem([600,
    86,
    150,
    98,
    227,
    23,
    'End'
])