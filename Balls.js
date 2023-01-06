function balls(input) {
    let number = Number(input[0]);

    let point = 0;
    let other = 0;
    let red=0;
    let orange=0;
    let yellow=0;
    let white=0;
    let black=0;

    for (let i = 1; i <= number; i++) {

        let color = input[i];

        if (color == "red") {
            point += 5;
            red++;
        }
        else if (color == "orange") {
            point += 10;
            orange++;
        }
        else if (color == "yellow") {
            point += 15;
            yellow++;
        }
        else if (color == "white") {
            point += 20
            white++;
        }
        else if (color == "black") {
            point /= 2;
            black++;
        }
        else {
            other++;
        }
    }
    console.log(`Total points: ${point}`);
    console.log(`Red balls: ${red}`);
    console.log(`Orange balls: ${orange}`);
    console.log(`Yellow balls: ${yellow}`);
    console.log(`White balls: ${white}`);
    console.log(`Other colors picked: ${other}`);
    console.log(`Divides from black balls: ${black}`);
}
balls([3, "white", "black", "pink"])