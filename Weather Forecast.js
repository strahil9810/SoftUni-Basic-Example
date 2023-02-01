function weatherForecast(input) {
    let information = input[0];

    if (information === "sunny") {
        console.log(`It's warm outside!`);
    }
    else {
        console.log(`It's cold outside!`);
    }
}
weatherForecast(["sunny"])