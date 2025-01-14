"use strict"; // treat js code as newer version of js
/*
DataTypes in js
number => 2 to power 53
bigInt
boolean
String => ""
Symbol
object

null it is a standalone value
*/

let name = "Manav"
name = 44  // we can reasssign the value and type because js is dynamically typed
// console.log(name)
let num = 123n;
console.table([typeof null, typeof undefined, typeof num])