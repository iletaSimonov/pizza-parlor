Description: pizza()

Test: "It should return a pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
Expected Output:  Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }

Test: "It should return the correct cost for a medium pizza with two toppings"
Code: const pizza = new Pizza('Medium', ['Pepperoni', 'Mushrooms']);
      const cost = pizza.getCost()
Expected Output: cost.toEqual(11);
