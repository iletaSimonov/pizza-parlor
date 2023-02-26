By Ileta Simonov

https://github.com/iletaSimonov/pizza-parlor

@iletaSimonov
This web application is a pizza website that allows you to choose the size and pizza toppings and calculate your price.

Technologies used:
-HTML
-CSS
-JavaScript

Description:
The Crazy Pizza Society is a mock pizza website that allows users to pick what size pizza they would like, and any amount of toppings and calculate their price. 

Setup/ Installation:
-Clone this repository to your desktop.
-Navigate to the top level of the directory.
-Open pizza-parlor/index.html in your browser.

Known Bugs:
No known bugs.

Licence:
MIT

Copyright (c) 2023 Ileta Simonov


TDD: 

Description: pizza()

Test: "It should return a pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
Expected Output:  Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }

Test: "It should return the correct cost for a medium pizza with two toppings"
Code: const pizza = new Pizza('Medium', ['Pepperoni', 'Mushrooms']);
      const cost = pizza.getCost()
Expected Output: cost.toEqual(11);


