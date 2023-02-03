function favoruteMovie(input) {
    let point = 0;
    let big_sum = 0;
    let biggest_word = 0;

    for (let i = 0; i < input.length; i++) {
        let film_name = input[i];

        if (film_name === "STOP") {
            break;
        }

        if (i == 6) {
            console.log(`The limit is reached.`);
            break;
        }

        for (let j = 0; j < film_name.length; j++) {
            let letter_film_name = film_name.charCodeAt(j);

            if (letter_film_name >= 65 && letter_film_name <= 90) {
                letter_film_name = letter_film_name - film_name.length;
            }
            else if (letter_film_name >= 97 && letter_film_name <= 122) {
                letter_film_name = letter_film_name - (2 * film_name.length);
            }

            point += letter_film_name;


            if (point > big_sum) {
                big_sum = point;
                biggest_word = film_name;
            }
        }
        point = 0;
    }

    console.log(`The best movie for you is ${biggest_word} with ${big_sum} ASCII sum.`);
}
favoruteMovie(["Wrong turn",
    "The maze",
    "Area 51",
    "Night Club",
    "Ice age",
    "Harry Potter",
    "Wizards"])


