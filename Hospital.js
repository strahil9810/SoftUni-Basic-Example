function hospital(input) {
    let days = Number(input.shift());
    let doctors = 7;
    let previewPantients = 0;
    let noPreviewPantients = 0;

    for (let index = 1; index <= days; index++) {
        let pantiens = Number(input.shift(index));

        if (index % 3 == 0) {
            if (noPreviewPantients > previewPantients) {
                doctors++;
            }
        }

        if (pantiens <= doctors) {
            previewPantients += pantiens;
        }
        else {
            noPreviewPantients += pantiens - doctors;
            previewPantients += doctors;
        }
    }
    console.log(`Treated patients: ${previewPantients}.`);
    console.log(`Untreated patients: ${noPreviewPantients}.`);
}
hospital([4, 7, 27, 9, 1])