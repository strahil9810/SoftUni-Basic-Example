function trapezoidArea(input){
    let side_a = Number(input[0]);
    let side_b = Number(input[1]);
    let higth = Number(input[2]);
    
    let area = (side_a + side_b) * higth / 2;

    console.log(area.toFixed(2));
}
trapezoidArea([8, 13, 7])