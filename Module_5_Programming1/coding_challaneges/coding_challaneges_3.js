// https://codepen.io/Dev-Rome/pen/yLbqLME
"use strict";

const quote =
  "Wipe the sweat off my dome, spit the phlegm on the streets Suede Timbs on my feets makes my cipher complete Whether crusining in a Sikh's cab, or Montero Jeep I can't call it, the beats make me falling asleep I keep falling, but never falling six feet deep I'm out for presidents to represent me, I'm out for presidents to represent me, I'm out for dead presidents to represent me,";
console.log(quote);

// Using split to change the quote to array of strings
let arrQuote = quote.split(" ");
console.log(arrQuote);

// Using for loop to iterate through and replace "s" with "$"
for (let i = 0; i < arrQuote.length; i++)
  arrQuote[i] = arrQuote[i].replace(/s/gi, "$");

console.log(arrQuote);

// joining back string
let newQuote = arrQuote.join(" ");

//Logging new string to screen
console.log(newQuote);
