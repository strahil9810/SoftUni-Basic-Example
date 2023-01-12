function easterParty(input){
    let allPeople=Number(input[0]);
    let priceForOneHuman=Number(input[1]);
    let sum=Number(input[2]);
    let priceCake=0;
    let allSum=0;

    if(allPeople>=10 && allPeople<=15){
        priceForOneHuman-=priceForOneHuman*0.15;
    }
    else if(allPeople>15 && allPeople<=20){
        priceForOneHuman-=priceForOneHuman*0.20;
    }
    else if(allPeople>20){
        priceForOneHuman-=priceForOneHuman*0.25;
    }

    priceCake=sum*0.10;
    
    allSum=allPeople*priceForOneHuman+priceCake;

    if(sum>=allSum){
        let leftPrice=Math.abs(allSum-sum).toFixed(2);
        console.log(`It is party time! ${leftPrice} leva left.`);
    }
    else{
        let needPrice=Math.abs(allSum-sum).toFixed(2);
        console.log(`No party! ${needPrice} leva needed.`)
    }
}
easterParty([24, 35, 550])