let score = "33"
let scoreInNumer = Number(score);

// NaN is not a number and it is or type number
//the thing is when you convert some data types like invalid string "adfe" it will be convereted in NaN
// if you convert null it will give 0 and if you convert undefined it will give NaN

booleanNum = Boolean("") // -> false output

// here empty string is false and non-empty is true;


// **************************************operations************************************

console.log("1" + 2) //=> 12
console.log(1 + "2") //=> 12
console.log("1" + 2 + 2) //=> 122
console.log(1 + 2 + "2") //=> 32

console.log(+true) // => 1
console.log(+"") // => 0
console.log(scoreInNumer++) // pehle print hoga 33 phir scoreInNumer ki value ho jayegi 34
console.log(++scoreInNumer) // pehle value update hogi 34 -> 35 then phir print hogi value 35