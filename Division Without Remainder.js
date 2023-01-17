function devisionWithputRemainder(input) {
    let n = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p1Percent = 0;
    let p2Percent = 0;
    let p3Percent = 0;

    for (let i = 1; i <= n; i++) {
        let number = Number(input[i]);

        if (number % 2 == 0) {
            p1++;
        }
        if (number % 3 == 0) {
            p2++;
        }
        if (number % 4 == 0) {
            p3++;
        }
    }
    p1Percent = (p1 / n) * 100;
    p2Percent = (p2 / n) * 100;
    p3Percent = (p3 / n) * 100;

    console.log(`${p1Percent.toFixed(2)}%`);
    console.log(`${p2Percent.toFixed(2)}%`);
    console.log(`${p3Percent.toFixed(2)}%`);
}
devisionWithputRemainder([3, 3, 6, 9])