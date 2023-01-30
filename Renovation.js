function renovation(input) {
    let wall_height = Number(input[0]);
    let wall_width = Number(input[1]);
    let wall_percent = Number(input[2]);
    let all_wall_surface = wall_height * wall_width * 4;
    let wall_paint = all_wall_surface - (all_wall_surface * wall_percent / 100);

    for (let i = 3; i < input.length; i++) {
        let leter_paint = Number(input[i]);

        if (input[i] === "Tired!") {
            break;
        }

        wall_paint -= leter_paint;
    }

    if (wall_paint < 0) {
        console.log(`All walls are painted and you have ${Math.abs(wall_paint)} l paint left!`);
    }
    else if (wall_paint == 0) {
        console.log(`All walls are painted! Great job, Pesho!`);
    }
    else {
        console.log(`${wall_paint} quadratic m left.`);
    }
}
renovation(["3",
    "5",
    "10",
    "2",
    "3",
    "4",
    "Tired!"])