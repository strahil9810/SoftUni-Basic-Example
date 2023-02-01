function housePainting(input) {
    let house_hight = Number(input[0]);
    let long_side_wall = Number(input[1]);
    let hight_triangle_roof = Number(input[2]);

    let side_wall_area = house_hight * long_side_wall;
    let window_area = 1.5 * 1.5;
    let two_side_wall_area = 2 * side_wall_area - 2 * window_area;

    let back_side_wall = house_hight * house_hight;
    let input_side_wall = 2 * 1.2;
    let back_input_wall_area = 2 * back_side_wall - input_side_wall;
    let all_wall_area = two_side_wall_area + back_input_wall_area;
    let paint_liters_wall = all_wall_area / 3.4;

    console.log(paint_liters_wall.toFixed(2));

    let two_rectangle_roof = 2 * (house_hight * long_side_wall);
    let two_triangle_roof = 2 * (house_hight * hight_triangle_roof / 2);
    let all_roof_area = two_rectangle_roof + two_triangle_roof;
    let paint_liters_roof = all_roof_area / 4.3;

    console.log(paint_liters_roof.toFixed(2));
}
housePainting([10.25, 15.45, 8.88])