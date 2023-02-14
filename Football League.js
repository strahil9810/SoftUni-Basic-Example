function footballLeague(input) {
    let stadionCapacitet = Number(input.shift());
    let numberFents = Number(input.shift());
    let fenSectorsA = 0;
    let fenSectorsB = 0;
    let fenSectorsV = 0;
    let fenSectorsG = 0;

    for (let index = 0; index < numberFents; index++) {
        let sectors = input.shift(index);

        switch (sectors) {
            case 'A':
                fenSectorsA++;
                break;

            case 'B':
                fenSectorsB++;
                break;

            case 'V':
                fenSectorsV++;
                break;

            case 'G':
                fenSectorsG++;
                break;
        }
    }

    let percentFentsA = (fenSectorsA / numberFents) * 100;
    console.log(`${percentFentsA.toFixed(2)}%`);

    let percentFentsB = (fenSectorsB / numberFents) * 100;
    console.log(`${percentFentsB.toFixed(2)}%`);

    let percentFentsV = (fenSectorsV / numberFents) * 100;
    console.log(`${percentFentsV.toFixed(2)}%`);

    let percentFentsG = (fenSectorsG / numberFents) * 100;
    console.log(`${percentFentsG.toFixed(2)}%`);

    let percentAllPeople = (numberFents / stadionCapacitet) * 100;
    console.log(`${percentAllPeople.toFixed(2)}%`);
}
footballLeague([76, 10, 'A', 'V', 'V', 'V', 'G', 'B', 'A', 'V', 'B', 'B'])