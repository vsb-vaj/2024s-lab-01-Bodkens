// 1#  ========== BONUS =======================
// With nested cycle display this:
// *
// * *
// * * *
// * * * *
// * * * * *

// Your code:

const drawTriangle = (length = 5) => {
    console.log("Triangle")
    for(let i = 1; i <= length;i++){
        let line = ""
        for (let j = 0; j < i; j++) line += "*"
        console.log(line)
    }
};
drawTriangle(5)
// 2#  ========== BONUS =======================
// Write function which will (with cycles) display this (keep in mind that there is no space after the last char):
// * * * * * * * * * *
// * * * * * * * * * T
// * * * * * * * * P T
// * * * * * * * I P T
// * * * * * * R I P T
// * * * * * C R I P T
// * * * * S C R I P T
// * * * A S C R I P T
// * * V A S C R I P T
// * A V A S C R I P T
// J A V A S C R I P T

// Your code:

const drawJavascriptWord = (word = "javascript") => {
    console.log("Draw JavaScript Word")
    word = word.toUpperCase()
    let chars = 0
    for (let i = 0; i < word.length + 1; i++){
        let line = ""
        let checkpoint = 0
        for (let j = 0; j < word.length - chars; j++){
            line += j < word.length - 1 ? "* ": "*"
            checkpoint += 1
        }
        for (let c = checkpoint; c < word.length; c++){
            line += c < word.length - 1 ? word[c] + " " : word[c]
        }
        chars += 1

        console.log(line)
    }

};
drawJavascriptWord()

// 3#  ========== BONUS =======================
// Create function that takes array of vehicles with measured top speeds. Return array of vehicle with top speed.
// Example:
// const vehicles = [
//   { name: "Executor Star Dreadnought", measuredSpeeds: [555, 545, 577, 600] },
//   { name: "T-47 Airspeeder", measuredSpeeds: [300, 311, 299, 350] },
//   { name: "AT-AT", measuredSpeeds: [20, 21, 20, 19] },
// ];
// getVehiclesAndTopSpeed(vehicles) ➞ will return ➞ [
//     { name: "Executor Star Dreadnought", topSpeed: 600},
//     { name: "T-47 Airspeeder", topSpeed: 350 },
//     { name: "AT-AT", topSpeed: 21 },
//   ];

// Your code:
const getVehiclesAndTopSpeed = (vehicles) => {
  function measureSpeed(obj){
      return {
          name: obj.name,
          topSpeed: Math.max(...obj.measuredSpeeds)
      }
  }
  let arr = []

  vehicles.forEach((element) => {
      arr.push(measureSpeed(element))
  })
    return arr
};

const vehicles = [
  { name: "Executor Star Dreadnought", measuredSpeeds: [555, 545, 577, 600] },
  { name: "T-47 Airspeeder", measuredSpeeds: [300, 311, 299, 350] },
  { name: "AT-AT", measuredSpeeds: [20, 21, 20, 19] },
];
console.log(getVehiclesAndTopSpeed(vehicles))