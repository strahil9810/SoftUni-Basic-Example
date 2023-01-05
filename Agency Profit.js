function solve(input) {
    let name = input[0];
    let ticketAdult = Number(input[1]);
    let ticketChildren = Number(input[2]);
    let priceAdult = Number(input[3]);
    let service = Number(input[4]);

    let priceChildrenWithService = priceAdult - (priceAdult * 0.7) + service;
    let adultTicketWithService = priceAdult + service;
    let allSum = (ticketAdult * adultTicketWithService) + (ticketChildren * priceChildrenWithService);
    let result = allSum * 0.2;
    console.log(`The profit of your agency from ${name} tickets is ${result.toFixed(2)} lv.`);
}
solve(["WizzAir", "60", "23", "158.96", "39.12"])