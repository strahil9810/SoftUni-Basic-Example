function pipesInPool(input) {
    let swimmingpool_volume = Number(input[0]);
    let first_pipe_for_hour = Number(input[1]);
    let second_pipe_for_hour = Number(input[2]);
    let hour_working_missing = Number(input[3]);

    let first_pipe_working = first_pipe_for_hour * hour_working_missing;
    let second_pipe_working = second_pipe_for_hour * hour_working_missing;
    let all_full_swimmingpool = first_pipe_working + second_pipe_working;
    let percent_full_swimmingpool = (all_full_swimmingpool / swimmingpool_volume) * 100;

    let percent_first_pipe = (first_pipe_working / all_full_swimmingpool) * 100;
    let percent_second_pipe = (second_pipe_working / all_full_swimmingpool) * 100;

    if (all_full_swimmingpool > swimmingpool_volume) {
        let litter_addition = all_full_swimmingpool - swimmingpool_volume;
        console.log(`For ${hour_working_missing} hours the pool overflows with ${litter_addition.toFixed(2)} liters.`);
    }
    else {
        console.log(`The pool is ${percent_full_swimmingpool.toFixed(2)}% full. Pipe 1: ${percent_first_pipe.toFixed(2)}%. Pipe 2: ${percent_second_pipe.toFixed(2)}%.`)
    }
}
pipesInPool([1000, 100, 100, 10])