function matchTicket(input){
    let budget = Number(input[0]);
    let categories = input[1];
    let number_people = Number(input[2]);
    
    let VIP = 499.99;
    let Normal = 249.99;
    let price = 0;
    let price_after_transport = 0;

    if(number_people >= 1 && number_people <= 4){
        price = budget - (budget * 0.75);
    }
    else if(number_people >= 5 && number_people <= 9){
        price = budget - (budget * 0.60);
    }
    else if(number_people >= 10 && number_people <= 24){
        price = budget - (budget * 0.50);
    }
    else if(number_people >= 25 && number_people <= 49){
        price = budget - (budget * 0.40);
    }
    else{
        price = budget - (budget * 0.25);
    }

    price_after_transport = budget - (budget - price);

    if(categories === "VIP"){
        price = number_people * VIP;
    }
    else{
        price = number_people * Normal;
    }

    if(price < price_after_transport){
        let left_price = price_after_transport - price;
        console.log(`Yes! You have ${left_price.toFixed(2)} leva left.`);
    }
    else{
        let needed_price = price - price_after_transport;
        console.log(`Not enough money! You need ${needed_price.toFixed(2)} leva.`);
    }
}
matchTicket([50000, "Normal", 200])