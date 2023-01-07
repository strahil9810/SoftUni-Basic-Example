function barcode(input) {
    let start = input[0];
    let finish = input[1];
    let number = "";

    let startFirst = start.charAt(0);
    let startSecond = start.charAt(1);
    let startThird = start.charAt(2);
    let startFour = start.charAt(3);

    let finishFirst = finish.charAt(0);
    let finishSecond = finish.charAt(1);
    let finishThird = finish.charAt(2);
    let finishFour = finish.charAt(3);

    for (let i = startFirst; i <= finishFirst; i++) {
        if (i % 2 == 0) {
            continue;
        }
        for (let j = startSecond; j <= finishSecond; j++) {
            if (j % 2 == 0) {
                continue;
            }
            for (let k = startThird; k <= finishThird; k++) {
                if (k % 2 == 0) {
                    continue;
                }
                for (let q = startFour; q <= finishFour; q++) {
                    if (q % 2 == 0) {
                        continue;
                    }
                    number += `${i}${j}${k}${q} `;
                }
            }
        }
    }
    console.log(number);

}
barcode(["2345", "6789"])