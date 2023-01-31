function trainingLab(input){
    let hight = Number(input[0]);
    let width = Number(input[1]);

    let classroom_width_places = parseInt((width * 100 - 100) / 70);
    let classroom_hight_places = parseInt((hight * 100) / 120);

    let all_classroom_places = classroom_hight_places * classroom_width_places - 3;

console.log(all_classroom_places);

}
trainingLab([8.4, 5.2])