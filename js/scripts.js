// Business Logic

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.getCost = function() {
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

// UI Logic

document.addEventListener('DOMContentLoaded', () => {

  const pizzaForm = document.getElementById('pizza-form');
  const display = document.getElementById('cost-display');


  pizzaForm.addEventListener('submit', event => {

    event.preventDefault();

    const sizeSelect = document.getElementById('size-select');
    const size = sizeSelect.value;
    const toppings = [];

    const checkboxes = document.querySelectorAll('input[name="toppings"]:checked');
    console.log(checkboxes);
    checkboxes.forEach(checkbox => {
      console.log(checkbox.value);
      toppings.push(checkbox.value);
    });

    const myPizza = new Pizza(size, toppings);
    const cost = myPizza.getCost();

    display.textContent = `Total cost: $${cost.toFixed(2)}`;
  });
});