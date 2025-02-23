'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [
      this.starterMenu[starterIndex], 
      this.mainMenu[mainIndex]
    ]
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

let [starter, main] = restaurant.order(2,1)
console.log('starter: ', starter, 'main: ', main);

const arr = [1, 2, [3, 4,]]
let [first, , [third, fourth]] = arr;
console.log(first, third, fourth);

console.log(restaurant.order(0, 1));

let {
  name: restaurantName,
  openingHours: hours
} = restaurant;
console.log(restaurantName, hours);

let {
  mainMenu: menu = [],
  categories: countryFood =[]} = restaurant;
console.log(menu, countryFood, hours);


let a = [1, 2, 3, 4];

let c = ["a", "b"];
console.log("c = ", c.concat(a));

let x = 1;
let y = 2;

console.log(`before x = ${x} and y = ${y}`);
[y, x] = [x, y];

console.log(`after x = ${x} and y = ${y}`);

// restaurant.numGuests = 0;

let guests = restaurant.numGuests || 10;
console.log(`Guests number is ${guests}`);

// Nullish coalescing operator:
console.log(restaurant.guests ?? 10)