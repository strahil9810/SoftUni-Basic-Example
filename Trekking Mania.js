function trekkingMania(input) {
    let numberGroup = Number(input[0]);
    let allPeople = 0;
    let peopleMusala = 0;
    let allMusalaPeople = 0;
    let peopleMonblan = 0;
    let allMonblatPeople = 0;
    let peopleKilimanjaro = 0;
    let allKilimanjaroPeople = 0;
    let peopleK2 = 0;
    let allK2People = 0;
    let peopleEverest = 0;
    let allEverestPeople = 0;

    for (let i = 1; i <= numberGroup; i++) {

        let peopleGroup = Number(input[i]);
        allPeople += peopleGroup;

        if (peopleGroup <= 5) {
            peopleMusala += peopleGroup;
        }
        else if (peopleGroup >= 6 && peopleGroup <= 12) {
            peopleMonblan += peopleGroup;
        }
        else if (peopleGroup >= 13 && peopleGroup <= 25) {
            peopleKilimanjaro += peopleGroup;
        }
        else if (peopleGroup >= 26 && peopleGroup <= 40) {
            peopleK2 += peopleGroup;
            
        }
        else if (peopleGroup >= 41) {
            peopleEverest += peopleGroup;
        }
        allMusalaPeople = peopleMusala / allPeople * 100;
        allMonblatPeople = peopleMonblan / allPeople * 100;
        allKilimanjaroPeople = peopleKilimanjaro / allPeople * 100;
        allK2People = peopleK2 / allPeople * 100;
        allEverestPeople = peopleEverest / allPeople * 100;
    }
    console.log(`${allMusalaPeople.toFixed(2)}%`);
    console.log(`${allMonblatPeople.toFixed(2)}%`);
    console.log(`${allKilimanjaroPeople.toFixed(2)}%`);
    console.log(`${allK2People.toFixed(2)}%`);
    console.log(`${allEverestPeople.toFixed(2)}%`);
}
trekkingMania([5, 25, 41, 31, 250, 6])