function easterEggs(input) {
    let allEggs = Number(input[0]);
    let redEggs = 0;
    let orangeEggs = 0;
    let blueEggs = 0;
    let greenEggs = 0;

    for (let i = 1; i < input.length; i++) {
        let colorEggs = input[i];

        if (colorEggs == "red") {
            redEggs++;
            allEggs--;
        }
        else if (colorEggs == "orange") {
            orangeEggs++;
            allEggs --;
        }
        else if (colorEggs == "blue") {
            blueEggs++;
            allEggs --;
        }
        else if (colorEggs == "green") {
            greenEggs++;
            allEggs --;
        }
    }
    let max=redEggs;
    let maxColor="red";

    if(orangeEggs>max){
        max=orangeEggs;
        maxColor="orange";
    }

    if(blueEggs>max){
        max=blueEggs;
        maxColor="blue"
    }

    if(greenEggs>max){
        max=greenEggs;
        maxColor="green";
    }
    console.log(`Red eggs: ${redEggs}`);
    console.log(`Orange eggs: ${orangeEggs}`);
    console.log(`Blue eggs: ${blueEggs}`);
    console.log(`Green eggs: ${greenEggs}`);

    console.log(`Max eggs: ${max} -> ${maxColor}`);
}
easterEggs([7, "orange", "blue",
    "green", "green", "blue", "red",
    "green"])