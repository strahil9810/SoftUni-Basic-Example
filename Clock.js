function clock(){
    for(let hour = 0; hour < 24; hour++){
        for(let minutes = 0; minutes < 60; minutes++){
            for(let second = 0; second < 60; second++){
                console.log(`${hour} : ${minutes} : ${second}`);
            }
        }
    }
}
clock()