function circleAreaAndPerimeter(input) {
    let radius = Number(input[0]);
    let circle_area = Math.PI * radius * radius;
    let circle_perimeter = 2 * Math.PI * radius;

    console.log(circle_area.toFixed(2));
    console.log(circle_perimeter.toFixed(2));
}
circleAreaAndPerimeter([3])