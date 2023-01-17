function fitnessCenter(input) {
    let people = Number(input[0]);
    let peopleBack = 0;
    let peopleChest = 0;
    let peopleLegs = 0;
    let peopleAbs = 0;
    let proteinShake = 0;
    let proteinBar = 0;
    let treningPeople = 0;
    let peopleBuyProduct = 0;
    let treningPeoplePercent = 0;
    let peopleBuyProductPercent = 0;

    for (let i = 1; i < input.length; i++) {
        let activity = input[i];

        switch (activity) {
            case 'Back':
                peopleBack++;
                break;

            case 'Chest':
                peopleChest++;
                break;

            case 'Legs':
                peopleLegs++;
                break;

            case 'Abs':
                peopleAbs++;
                break;

            case 'Protein shake':
                proteinShake++;
                break;

            case 'Protein bar':
                proteinBar++;
                break;
        }

        treningPeople = people - (proteinShake + proteinBar);
        treningPeoplePercent = (treningPeople / people) * 100;
        peopleBuyProduct = people - treningPeople;
        peopleBuyProductPercent = (peopleBuyProduct / people) * 100;
    }
    console.log(`${peopleBack} - back`);
    console.log(`${peopleChest} - chest`);
    console.log(`${peopleLegs} - legs`);
    console.log(`${peopleAbs} - abs`);
    console.log(`${proteinShake} - protein shake`);
    console.log(`${proteinBar} - protein bar`);
    console.log(`${treningPeoplePercent.toFixed(2)}% - work out`);
    console.log(`${peopleBuyProductPercent.toFixed(2)}% - protein`);
}
fitnessCenter([10,
"Back",
"Chest",
"Legs",
"Abs",
"Protein shake",
"Protein bar",
"Protein shake",
"Protein bar",
"Legs",
"Abs"])