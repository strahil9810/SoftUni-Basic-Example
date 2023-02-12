function grades(input) {
    let numberStudent = Number(input.shift());
    let fail = 0;
    let percentFail = 0;
    let betwenn3And4 = 0;
    let percentbetwenn3And4 = 0;
    let betwenn4And5 = 0;
    let percentbetwenn4And5 = 0;
    let top = 0;
    let percenTop = 0;
    let price = 0;

    for (let index = 1; index <= numberStudent; index++) {
        let assessment = Number(input.shift(index));

        if (assessment <= 2.99) {
            fail++;
        }
        else if (assessment >= 3.00 && assessment <= 3.99) {
            betwenn3And4++;
        }
        else if (assessment >= 4.00 && assessment <= 4.99) {
            betwenn4And5++;
        }
        else {
            top++;
        }

        price += assessment;
    }

    percenTop = top / numberStudent * 100;
    console.log(`Top students: ${percenTop.toFixed(2)}%`);

    percentbetwenn4And5 = betwenn4And5 / numberStudent * 100;
    console.log(`Between 4.00 and 4.99: ${percentbetwenn4And5.toFixed(2)}%`);

    percentbetwenn3And4 = betwenn3And4 / numberStudent * 100;
    console.log(`Between 3.00 and 3.99: ${percentbetwenn3And4.toFixed(2)}%`);

    percentFail = fail / numberStudent * 100;
    console.log(`Fail: ${percentFail.toFixed(2)}%`);

    console.log(`Average: ${(price / numberStudent).toFixed(2)}`);
}
grades([10, 3.00, 2.99, 5.68, 3.01, 4, 4, 6.00, 4.50, 2.44, 5])