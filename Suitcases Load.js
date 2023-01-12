function suitcasesLoad(input) {
    let capacityTrunk = Number(input[0]);
    let allBackSize = 0;

    for (let back = 1; back < input.length; back++) {
        let backSize = input[back];

        if (backSize == "End") {
            console.log(`Congratulations! All suitcases are loaded!`);
            console.log(`Statistic: ${back - 1} suitcases loaded.`);
            break;
        }
        backSize = Number(input[back]);
        allBackSize += backSize;

        if (back % 3 == 0) {
            allBackSize += back * 0.10;
        }

        if (allBackSize >= capacityTrunk) {
            console.log(`No more space!`);
            console.log(`Statistic: ${back - 1} suitcases loaded.`);
            break;
        }
    }
}
suitcasesLoad([700.5, 180, 340.6, 126, 220])