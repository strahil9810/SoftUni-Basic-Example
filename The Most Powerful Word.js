function powerfulWord(input) {
    let result = 0
    let big_sum = 0;
    let biggest_word = 0;

    for (let i = 0; i < input.length; i++) {
        let letter_sum = 0;

        let word = input[i];
        let upper_case_word = word.toUpperCase();

        if (word == "End of words") {
            break;
        }

        for (let j = 0; j < word.length; j++) {
            let letter_word = word.charCodeAt(j);

            letter_sum += letter_word;

            if (upper_case_word[0] == "A" || upper_case_word[0] == "E" || upper_case_word[0] == "I" || upper_case_word[0] == "O" || upper_case_word[0] == "U" || upper_case_word[0] == "Y") {
                result = letter_sum * word.length;
            }
            else {
                result = letter_sum / word.length;
            }
        }

        if (result > big_sum) {
            big_sum = result;
            biggest_word = word;
        }
    }
    console.log(`The most powerful word is ${biggest_word} - ${Math.floor(big_sum)}`);
}
powerfulWord(["The",
    "Most",
    "Powerful",
    "Word",
    "Is",
    "Experience",
    "End of words"])
