// Check functions which could help you solve these tasks https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// 1 =================================
// Write function to parameterize a string.
// Example:
// console.log(parametrize("Javascript is the best"));
// "javascript-is-the-best"

// Your code:
const parametrize = (input) => input.toLowerCase().replaceAll(" ", "-")

console.log(parametrize("Javascript is the best"))
// 2 =================================
// Write function that takes object and return sentence
// Example:
// giveSentenceForPerson({name: "Obi-wan", position: "Jedi", age: 40, location: "Starwars universe"})
// ➞ Hello Obi-wan from Starwars universe! It is nice to meet you! You look awesome for your 40, young Jedi!

// Your code:
const giveSentenceForPerson = (obj) => {
    console.log(`Hello ${obj.name} from ${obj.location} universe! It is nice to meet you! You look awesome for your ${obj.age}, young ${obj.position}!`)
};
giveSentenceForPerson({name: "Bohdan", position: "Programmer", age: 20, location: "Ostrava"})

// 3 =================================
// Write function that takes string and replace all `a`, `e`, `i`, `o` with *
// Example:
// replace("Hello Javascript") ➞ "H*ll* J*v*scr*pt"

// Your code:
const replace = (input) => input.replaceAll(/[aeio]/gi, "*")

console.log(replace("Hello World in JavaScript"))
