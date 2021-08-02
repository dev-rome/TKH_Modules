// https://codepen.io/Dev-Rome/pen/dyWjbgr
"use strict";

// Array of names
const names = [
  "Westly Snipes",
  "Nicholas Cage",
  "Nasir Jones",
  "Sean Carter",
  "Sean Combs",
  "Michael Jordan",
  "Patrick Ewing",
];
console.log(names);

// Empty list for first names and last names
let firstNames = [];
let lastNames = [];

// For loop to iterate through names split array then push first names into firstNames arrays and last names to lastNames array
for (let i = 0; i < names.length; i++) {
  let splitNames = names[i].split(" ");
  console.log(splitNames);

  firstNames.push(splitNames[0]);
  lastNames.push(splitNames[1]);
}

// Log both first and last names to console
console.log(firstNames);
console.log(lastNames);
