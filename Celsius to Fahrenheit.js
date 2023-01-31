function convertDegree(input){
    let degree_celsius = Number(input[0]);
    let degree_fahrenheit = degree_celsius * 1.8 + 32;

    console.log(degree_fahrenheit.toFixed(2));
}
convertDegree([-5.5])