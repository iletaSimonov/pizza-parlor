// Business Logic

const pizza = {
  toppings: [],
  size: ''
}

function myPizza(toppings, size) {
  this.size = size;
  this.toppings = toppings;
}

pizza.prototype.getCost = function() {
  let basePrice;

  switch (this.size) {
    case 'Small':
      basePrice = 8;
      break;
    case 'Medium':
      basePrice = 10;
      break;
    case 'Large':
      basePrice = 12;
      break;
    default:
      basePrice = 0;
  }

  const toppingPrice = this.toppings.length * 0.75;

  return basePrice + toppingPrice;
};