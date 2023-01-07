function joinery(input) {
    let number = Number(input[0]);
    let view = input[1];
    let method = input[2];
  
    let price = 0;
  
    if (number < 10) {
      console.log('Invalid order');
      return;
    }
  
    switch (view) {
      case '90X130':
        price = number * 110;
  
        if (number > 30 && number < 61) {
          price -= price * 0.05;
        }
        else if (number > 60) {
          price -= price * 0.08;
        }
        break;
  
      case '100X150':
        price = number * 140;
  
        if (number > 40 && number < 81) {
          price -= price * 0.06;
        }
        else if (number > 80) {
          price -= price * 0.10;
        }
        break;
  
      case '130X180':
        price = number * 190;
  
        if (number > 20 && number <= 50) {
          price -= price * 0.07;
        }
        else if (number > 50) {
          price -= price * 0.12;
        }
        break;
  
      case '200X300':
        price = number * 250;
  
        if (number > 25 && number <= 50) {
          price -= price * 0.09;
        }
        else if (number > 50) {
          price -= price * 0.14;
        }
        break;
    }
  
    if (method == "With delivery") {
      price += 60;
    }
  
    if (number > 99) {
      price -= price * 0.04;
    }
    console.log(`${price.toFixed(2)} BGN`);
  }
  joinery([40, "90X130", "Without delivery"])