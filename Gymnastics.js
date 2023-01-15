function gymnastics(input) {
    let country = input[0];
    let sport = input[1];
    let pointResult = 0;
    let leftPoint = 0;
    let pointToProcent = 0;
    let maxPoint = 20;

    switch (country) {
        case "Russia":
            if (sport == 'ribbon') {
                pointResult = 9.100 + 9.400;
            }
            else if (sport == 'hoop') {
                pointResult = 9.300 + 9.800;
            }
            else if (sport == 'rope') {
                pointResult = 9.600 + 9.000;
            }
            break;

        case "Bulgaria":
            if (sport == 'ribbon') {
                pointResult = 9.600 + 9.400;
            }
            else if (sport == 'hoop') {
                pointResult = 9.550 + 9.750;
            }
            else if (sport == 'rope') {
                pointResult = 9.500 + 9.400;
            }
            break;

        case "Italy":
            if (sport == 'ribbon') {
                pointResult = 9.200 + 9.500;
            }
            else if (sport == 'hoop') {
                pointResult = 9.450 + 9.350;
            }
            else if (sport == 'rope') {
                pointResult = 9.700 + 9.150;
            }
            break;
    }
    leftPoint = maxPoint - pointResult;
    pointToProcent = (leftPoint / maxPoint) * 100;
    console.log(`The team of ${country} get ${pointResult.toFixed(3)} on ${sport}.`);
    console.log(`${pointToProcent.toFixed(2)}%`)
}
gymnastics(["Bulgaria", "ribbon"])