//Task_1
function saleHotdogs(n){
  if (n<5) return 100*n;
  else if (n>=5 && n<10) return 95*n;
  else if (n>=10) return 90*n;
}

// Task_2
var a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"
function Dad(){
  //select some variable to combine "Dad"
  return d1+a2+d2;
}
function Bee(){
  //select some variable to combine "Bee"
  return b1+e2+e2;
}
function banana(){
  //select some variable to combine "banana"
  return b2+a2+n2+a2+n2+a2;
}

//answer some questions if you finished works above
function answer1(){
  //the answer should be "yes" or "no"
  return "no";
}
function answer2(){
  //the answer should be "yes" or "no"
  return "no";
}
function answer3(){
  //the answer should be "yes" or "no"
  return "yes";
}


// Task_3
let v1 = 50,
	v2 = 100,
    v3 = 150,
    v4 = 200,
    v5 = 2,
    v6 = 250;

function equal1(){
  let a = v1,   
      b = v1;   
  return a + b;
}

//Please refer to the example above to complete the following functions
function equal2(){
  let a = v3, //set number value to a
      b = v1; //set number value to b
  return a - b;
}

function equal3(){
  let a = v1, //set number value to a
      b = v5; //set number value to b
  return a * b;
}

function equal4(){
  let a = v4, //set number value to a
      b = v5; //set number value to b
  return a / b;
}

function equal5(){
  let a = v6, //set number value to a
      b = v3; //set number value to b
  return a % b;
}


//Task_4

function getLength(arr){
  //return length of arr
  return arr.length
}
function getFirst(arr){
  //return the first element of arr
  return arr[0]
}
function getLast(arr){
  //return the last element of arr
  return arr[arr.length-1]
}
function pushElement(arr){
  var el=1;
  arr.push(el);
  //push el to arr
  return arr
}
function popElement(arr){
  //pop an element from arr
  arr.pop()
  return arr
}

//Task_5
function multiply(a, b){
  return a * b;
}

//Task_6
var a = "code";
var b = "wa.rs";
var name = a + b;


//Task_7
function mystery() {
  var results = {sanity: 'Hello'};
  return results;
}

//Task_8
function checkAlive (health) {
  if (health <= 0) {
    return false;
  } 
  else {
    return true;
  }
}

//Task_9
// Write the "square"-function here
function square (arg1) {
  var result = Math.pow (arg1, 2);
  return result;
}


//Task_10
function capitalizeWord(word) {
  var newWord = word[0].toUpperCase() + word.slice(1);
  return newWord;
}

//Task_11 
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if (fuelLeft*mpg >= distanceToPump) {
    return(true);
    } else {
      return(false);
    }
};


//Task_12
function createArray(number){
  var newArray = [];
  
  for (var counter = 1; counter <= number; counter++) {
    newArray.push(counter);
  }
  
  return newArray;
}

//Task_13 
const solve = (x, y) => x / y;

//Task_14
function evenOrOdd(number) {
  let num = number;
  if (num % 2 == 0) {
    return ("Even");
  }
  else {
    return ("Odd");
  }
}

//Task_15
function rainAmount(mm) {
    if (mm < 40) {
         return (`You need to give your plant ${40 - mm}mm of water`);
    }
    else {
         return ("Your plant has had more than enough water for today!");
    };
}

//Task_16
function solution(str){
  return str.split("").reverse().join("");
}

//Task_17
function opposite(number) {
  return (number * (-1));
}

//Task_18
function makeNegative(num) {
  if (num >= 0) {
    return (num * (-1));
  }
  else {
    return (num);
  }
}


//Task_19
function greet(name){
  return (`Hello, ${name} how are you doing today?`);
}

//Task_20
function removeChar(str){
 if (str.length >= 2){
   return(str.slice(1, -1));
 }
  else {
    return(str);
  }
}

//Task_21
function noSpace(x){
return (x.replace(/\s/g,''));
}

//Task_22
function countSheeps(arrayOfSheep) {
  let sum = 0;
  for (let i=0; i < arrayOfSheep.length; i++) {
     if (arrayOfSheep[i] == true) {
    sum+= 1;
  }
}
  return (sum);
}

//Task_23
function litres(time) {
  return (Math.floor(time * 0.5));
}

//Task_24
function basicOp(operation, value1, value2)
{ if (operation == `+`) {
      return(value1 + value2);
      }
 else if (operation == `-`) {
      return(value1 - value2);
   }
  else if (operation == `*`) {
      return(value1 * value2);
    }
   else if (operation == `/`) {
      return(value1 / value2);
}
    }

//Task_25
function century(year) {
  return (Math.ceil(year / 100));
}

//Task_25
function doubleInteger(i) {
  i=i*2;
  return (i);
}

//Task_26
function maps(x){
 let result = x.map(function(elem){
  return (elem * 2);
});
  return(result);
}

//Task_27
function evalObject(value){
  var result = 0;
  switch(value.operation){
    case'+': result = value.a + value.b;
      break;
    case'-': result = value.a - value.b;
       break;
    case'/': result = value.a / value.b;
       break;
    case'*': result = value.a * value.b;
       break;
    case'%': result = value.a % value.b;
       break;
    case'^': result = Math.pow(value.a, value.b);
       break;
  }
  return result;
}

//Task_28
const quarterOf = (month) => {
  return Math.ceil(month / 3);
}


//Task_29
function greet(name){
   if(name === "Johnny") {
    return "Hello, my love!";
    }
  return "Hello, " + name + "!";
}


//Task_30
function makeUpperCase(str) {
  return str.toUpperCase();
}

//Task_31
function lovefunc(flower1, flower2){
  if ((flower1 + flower2) % 2 > 0) {
    return (true);
  }
  else {
    return (false);
  }
}

//Task_32
function shortcut (string) {
  return string.replace(/[aeiou]/g, '');
}


//Task_33 (This kata is about multiplying a given number by eight if it is an even number and by nine otherwise).
function simpleMultiplication(number) {
    if(number % 2 == 0) {
      return (number * 8);
      }
      else {
        return (number * 9);
      }
}

//Task_33 (2nd version)
function simpleMultiplication(n) {
    return n * (n % 2 ? 9 : 8);
}


//Task_34 
//Clock shows h hours, m minutes and s seconds after midnight.
Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s){
  return (h * 3600000 + m * 60000 + s * 1000);
}

//Task_35
Create a function that checks if a number n is divisible by two numbers x AND y. 
All inputs are positive, non-zero numbers. 

function isDivisible(n, x, y) {
  if (n % x == 0 && n % y == 0) {
    return (true);
  }
  return (false);
}

//Task_35 (2nd version)

function isDivisible(n, x, y) {
  return (n % x === 0 && n % y === 0) ? true : false;
}

//Task_36
Given a set of numbers, return the additive inverse of each. 
Each positive becomes negatives, and the negatives become positives.
function invert(array) {
   let invArray = array.map(function (element){
     element *= -1;
     return (element);
   })
     return (invArray);
}

//Task_36 (2nd version)
function invert(array) {
  for(let i=0; i<array.length; i++){
    array[i] *= -1;
  }
   return array;
}

//Task_36 (3nd version)
function invert(array) {
   return array.map(e=> e*-1);
}

OR

function invert(array) {
   return array.map(el => -el);
}

//Task_37

function DNAtoRNA(dna) {
  let rna = dna.replace (/T/ig, 'U');
  return (rna);
}

//Task_38
var min = function(list){
    result = Math.min(...list);
    return result;
}

var max = function(list){
    result = Math.max(...list);
    return result;
}

//Task_38
/* Write a function which calculates the average of the numbers in a given list.
Note: Empty arrays should return 0. */

function findAverage(array) {
  if (array.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum/array.length;
}

//Task_39
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
function removeExclamationMarks(s) {
  return s.replace(/!/g, '');
}

//Task_40 
// Given a non-empty array of integers, return the result of multiplying the values together in order.
function grow(x){
let result = 1;
  for (let i = 0; i < x.length; i++) {
result = result * x[i];    
  }
  return result;
}


//Task_40 (2nd version)
const grow=x=> x.reduce((a,b) => a*b);

//Task_41
// Let's play! You have to return which player won! In case of a draw return Draw!.
// Examples(Input1, Input2 --> Output):

/* "scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!" */

const rps = (p1, p2) => {
if (p1 == "scissors" && p2 == "paper") {
  return "Player 1 won!";
  } else if (p1 == "scissors" && p2 == "rock") {
    return "Player 2 won!";
    } else if (p1 == "paper" && p2 == "scissors") {
      return "Player 2 won!";
      } else if (p1 == "paper" && p2 == "rock") {
        return "Player 1 won!";
        } else if (p1 == "rock" && p2 == "scissors") {
          return "Player 1 won!";
          } else if (p1 == "rock" && p2 == "paper") {
            return "Player 2 won!";
            } else {
                return "Draw!"
          }
};

//Task_41 (2nd version)
const rps = (p1, p2) => {
  if (p1 == p2)
    return 'Draw!';
    
   if (p1 == 'rock' && p2 == 'scissors') 
     return 'Player 1 won!'
   else if (p1 == 'scissors' && p2 == 'paper') 
     return 'Player 1 won!'
   else if (p1 == 'paper' && p2 == 'rock') 
     return 'Player 1 won!'
   else
     return 'Player 2 won!';
};

//Task_42
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return (length * width * height);
  }
}

//Task_43
/* You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter. */

const areaOrPerimeter = function(l , w) {
  if (l == w) {
    return l * w;
  }
    return (l * 2 + w * 2);
};


//Task_44
// Write function bmi that calculates body mass index (bmi = weight / height2).
//if bmi <= 18.5 return "Underweight"
//if bmi <= 25.0 return "Normal"
//if bmi <= 30.0 return "Overweight"
//if bmi > 30 return "Obese"

function bmi(weight, height) {
 let result = weight / Math.pow(height, 2);
  if (result <= 18.5) {
    return "Underweight";
  } else if (result <= 25.0) {
    return "Normal";
  } else if (result <= 30.0) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

//Task_45
//You are given two interior angles (in degrees) of a triangle.
//Write a function to return the 3rd.
//Note: only positive integers will be tested.

function otherAngle(a, b) {
  return (180 - (a +b));
}


//Task_46
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. 
//You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. 
//Be careful, there shouldn't be a space at the beginning or the end of the sentence!

function smash (words) {
   return (words.join(' '));
};

//Task_47
//Complete the function to return his total number of goals in all three league
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}


//Task_48 
// Write a function named setAlarm which receives two parameters. 
//The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
//The function should return true if you are employed and not on vacation 
//because these are the circumstances under which you need to set an alarm). 
//It should return false otherwise.

function setAlarm(employed, vacation){
let result = (employed == true && vacation == false) ? true : false;
  return result;
}

//Task_49
//Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
function getGrade (s1, s2, s3) {
  let avrg = (s1 + s2 + s3) / 3;
  if (avrg >= 90 && avrg <= 100) {
    return 'A';
    } else if (avrg >= 80 && avrg < 90) {
    return 'B';
    } else if (avrg >= 70 && avrg < 80) {
    return 'C';
    } else if (avrg >= 60 && avrg < 70) {
    return 'D';
    } else {
    return 'F';
    }
  }
  
//Task_49 (2nd version)
  function getGrade (s1, s2, s3) {
  var s = (s1 + s2 + s3) / 3
  return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F"
}


//Task_50
//In this kata you will create a function that takes a list of non-negative integers and strings 
//and returns a new list with the strings filtered out.

function filter_list(l) {
  let newarr = l.filter(function(item) {
    if (typeof item === 'number') {
      return true;
}
    })
    return newarr;
 }
 
//Task_50 (2nd version)

function filter_list(l) {
  return l.filter(function(v) {return typeof v == 'number'})
}
 
//Task_50 (3rd version)

function filter_list(l) {
 return l.filter(v => typeof v == "number")
}


//Task_51
//Return the average of the given array rounded down to its nearest integer.
//The array will never be empty.
function getAverage(marks){
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    sum = sum + marks[i];
  }
  return Math.floor(sum / marks.length);
}

//Task_52
Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):
Example: (Input1, Input2 -->Output)

function sumStr(a,b) {
  return String(Number(a) + Number(b));
}


//Task_53
//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
//Example(Input => Output):
//35231 => [1,3,2,5,3]
//0 => [0]

1st version
function digitize(n) {
  let str1 = String(n);
  let res1 = str1.split('').reverse();
  return res1.map(item => Number(item));
}

2nd version
function digitize(n) {
  return String(n).split('').map(Number).reverse()
}

//Task_54
//Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
//Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

function paperwork(n, m) {
  if (n < 0 || m < 0) {
    return 0;
  } else {
    return n * m;
  }
}

//Task_55
//need a function that can transform a number (integer) into a string.
//What ways of achieving this do you know?

function numberToString(num) {
  return String(num);
}

//Task_56
//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord( bool ){
  if (bool === true) {
    return "Yes";//...
  }
  return "No";
}

//Task_56 2nd version
function boolToWord( bool ){
  return bool === true ? "Yes" : "No";
}

//Task_57
//We need a function that can transform a string into a number. What ways of achieving this do you know?

const stringToNumber = function(str){
  return Number(str);
}


//Task_57 (2nd version)

var stringToNumber = function(str){
  return parseInt(str);
}

//Task_57 (3rd version)

var stringToNumber = function(str){
  return +str;
}


//Task_58
//You get an array of numbers, return the sum of all of the positives ones.
//Example [1,-4,7,12] => 1 + 7 + 12 = 20
//Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i ++) {
    if (arr[i] > 0) {
      sum = sum + arr[i];
    }
  }
  return sum;
}

//Task_59
//Given an array of integers your solution should find the smallest integer.

class SmallestIntegerFinder {
  findSmallestInt(args) {
    let currentMin = args[0];
    for (let i = 1; i < args.length; i++) {
      if (args[i] < currentMin) {
        currentMin = args[i];
      }
    }
    return currentMin;
  }
}

//Task_59 (2nd version)
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}

//Task_60
//Make a simple function called greet that returns the most-famous "hello world!".

function greet () {
  return "hello world!"
}

//Task_61
//Implement a function which convert the given boolean value into its string representation.
//Note: Only valid inputs will be given.

function booleanToString(b){
  if (b === true) {
    return "true";
  } else {
    return "false";
  }
}

//Task_61 (2nd version)
function booleanToString(b){
  return b.toString();
}

//Task_61 (3rd version)
function booleanToString(b){
  return String(b);
}

//Task_62
//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//The output should be two capital letters with a dot separating them.
//It should look like this:
//===> Sam Harris => S.H
//===> patrick feeney => P.F


function abbrevName(name){
  let arr = name.split(' ');
  return arr[0].charAt(0).toUpperCase() + "." + arr[1].charAt(0).toUpperCase();
}


//Task_62 (2nd version)
function abbrevName(name){

    return name[0].toUpperCase() + "." + name[name.indexOf(" ")+1].toUpperCase();
}

//Task_63
//Create a function which answers the question "Are you playing banjo?".
//If your name starts with the letter "R" or lower case "r", you are playing banjo!
//The function takes a name as its only argument, and returns one of the following strings:
//name + " plays banjo" 
//name + " does not play banjo"

function areYouPlayingBanjo(name) {
  if (name[0] == "R" || name[0] == "r") {
    return name + " plays banjo";
  } else {
    return name + " does not play banjo";
  }
}

//Task_63 (2nd version)
function areYouPlayingBanjo(name) {
  if (name[0].toLowerCase() === 'r') {
    return name + ' plays banjo';
  } else {
    return name + ' does not play banjo';
  }
}

//Task_64
//You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
//Array can contain numbers or strings. X can be either.
//Return true if the array contains the value, false if not.

function areYouPlayingBanjo(name) {
function check(a,x){
  return a.includes(x);
};


//Task_65
//A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! 
//each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. 
//Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?
//Return True if yes, False otherwise :)

function hero(bullets, dragons){
if (bullets >= dragons * 2) {
  return true;
}
  return false;
}

//Task_65 (2nd version)
function hero(bullets, dragons){
  return bullets/dragons >= 2
}

//Task_66
//You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.
//As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.
//For example(Input --> Output):

10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 1 --> [1]
 
function monkeyCount(n) {
let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr;
}


//Task_67
//Write a function to split a string and convert it into an array of words.
//Examples (Input ==> Output):
//"Robin Singh" ==> ["Robin", "Singh"]

function stringToArray(string){
  return string.split(' ');
}

//Task_68
//Build a function that returns an array of integers from n to 1 where n>0.
//Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
  let arr = [];
  for (let i = n; i > 0; i--) {
    arr.push(i);
  }
  return arr;
};

//Task_69
//Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
//Use conditionals to return the proper message:
//name equals owner ====>	 'Hello boss'
//otherwise =====>	'Hello guest'

function greet (name, owner) {
  if (name == owner) {
    return "Hello boss";
  } else {
    return "Hello guest";
  }
}


//Task_70
//Can you find the needle in the haystack?
//Write a function findNeedle() that takes an array full of junk but containing one "needle"
//After your function finds the needle it should return a message (as a string) that says:
//"found the needle at position " plus the index it found the needle, so:
//Example(Input --> Output)
//["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"

function findNeedle(haystack) {
  let res = haystack.indexOf("needle");
  return `found the needle at position ${res}`;
}


//Task_71
//Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. 
//If the array does not contain any numbers then you should return 0.

function sum (numbers) {
    "use strict";
    let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
   return result; 
};


//Task_72
Complete the solution so that it reverses all of the words within the string passed in.
Example(Input --> Output):
"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

function reverseWords(str){
  let arr = str.split(" ");
  let reverseArr = arr.reverse();
  let resultStr = reverseArr.join(" ");
  return resultStr;
}

//Task_72 (2nd version)
function reverseWords(str){
  return str.split(' ').reverse().join(' ');
}

//Task_73
//The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).
//For example:  1.08 --> 30

function cockroachSpeed(s) {
  return Math.floor(s * 100000 / 3600);
}

//Task_74
//You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.
//Write a program that returns the girl's age (0-9) as an integer.
//Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". 
//The first character in the string is always a number.

function getAge(inputString){
return Number(inputString[0]);
}

//Task_75
//If you can't sleep, just count sheep!!
//Task:
//Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". 
//Input will always be valid, i.e. no negative integers.

var countSheep = function (num){
  let output = "";
  for (let i = 1; i <= num; i++) {
    output += `${i} sheep...`;
  }
  return output;
}

//Task_76
//Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. 
//Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
//Write a code that gives out the total amount for different days(d).

function rentalCarCost(d) {
  let total = d * 40;
  if (d >= 7) {
    total = d * 40 - 50;
  }
  else if (d >= 3) {
    total = d * 40 - 20;
  }
    return total;
}

//Task_77
//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
//Return your answer as a number.

function sumMix(x){
let sum = 0;
  x.map(item => sum += parseInt(item));
  return sum; 
}

//Task_77 (2nd version)

function sumMix(x){
let sum = 0;
  for (let i = 0; i < x.length; i++) {
    sum = sum + parseInt(x[i]);
  }
  return sum;
}

//Task_78
//Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
//For example (Input -> Output):
//2 -> 3 (1 + 2)
//8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

var summation = function (num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum = sum + i;
  }
  return sum;
}

//Task_79
//You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
//Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
//For example, when the input is green, output should be yellow.

function updateLight(current) {
  return (current == "green") ? "yellow"
  : (current == "yellow") ? "red"
  : "green";
}


//Task_79 (2nd version)

function updateLight(current) {
  switch (current) {
    case 'green':
      return 'yellow';
    case 'yellow':
      return 'red';
    default:
      return 'green';
  }
}

//Task_80
//All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. 
//For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
//Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
//Assume that beast and dish are always lowercase strings, and that each has at least two letters. 
//beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

function feast(beast, dish) {
  if (beast[0] === dish[0] && beast.at(-1) === dish.at(-1)) {
    return true;
  }
    return false;
}

//Task_81
//When provided with a number between 0-9, return it in words.
//Input :: 1
//Output :: "One".
//If your language supports it, try using a switch statement.

function switchItUp(number){
switch (number) {
    case 0:
    return "Zero";
    break;
    case 1:
    return "One";
    break; 
    case 2:
    return "Two";
    break; 
    case 3:
    return "Three";
    break; 
    case 4:
    return "Four";
    break; 
    case 5:
    return "Five";
    break; 
    case 6:
    return "Six";
    break; 
    case 7:
    return "Seven";
    break; 
    case 8:
    return "Eight";
    break; 
    case 9:
    return "Nine";
    break; 
}
}

//Task_82
//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
//Examples (Input -> Output):
//* "String"      -> "SSttrriinngg"
//* "Hello World" -> "HHeelllloo  WWoorrlldd"
//* "1234!_ "     -> "11223344!!__  "

function doubleChar(str) {
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + arr[i];
  }
  return arr.join("");
}

//Task_82 (2nd version)
function doubleChar(str) {
  return str.split('').map( x => x + x ).join('');
}

//Task_82 (3rd version)
function doubleChar(str) {
  return [...str].map(x => x.concat(x)).join("");
}

//Task_83
//Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.
//If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.
//Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala, and Julia), 
//"$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell, and Lua) or "¥" (Rust).

function bonusTime(salary, bonus) {
  if (bonus == true) {
    return ("\u00A3" + String(salary * 10));
  }
  else {
    return ("\u00A3" + String(salary));
  }
}

//Task_83 (2nd version)
function bonusTime(salary, bonus) 
{
  if(bonus)
  {
    return "£" + (salary*10).toString();
  }
  return "£" + salary.toString();
}

//Task_83 (3rd version)
function bonusTime(salary, bonus) {
  var money = bonus ? salary*10 : salary;
  return '£' + money;
}

//Task_84
//Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him
//Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)
//If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
//If he doesn't get 10 hoops, return the string "Keep at it until you get it".

function hoopCount (n) {
   if (n >= 10) {
     return "Great, now move on to tricks";
   }
  else {
    return "Keep at it until you get it";
  }
}

//Task_85
//In this Kata we are passing a number (n) into a function.
//Your code will determine if the number passed is even (or not).
//The function needs to return either a true or false.
//Numbers may be positive or negative, integers or floats.
//Floats with decimal part non equal to zero are considered UNeven for this kata.

function testEven(n) {
    if (n % 2 == 0) {
      return true;
    }
  else {
    return false;
  }
}

//Task_85 (2nd version)
function testEven(n) {
  return n % 2 === 0 ? true : false;
}

//Task_86
//The function is not returning the correct values. Can you figure out why?
//Example (Input --> Output ):
//3 --> "Earth"

function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      name = 'Mercury';
      break;
    case 2:
      name = 'Venus';
      break;
    case 3:
      name = 'Earth';
      break;
    case 4:
      name = 'Mars';
      break;
    case 5:
      name = 'Jupiter';
      break;
    case 6:
      name = 'Saturn';
      break;
    case 7:
      name = 'Uranus';
      break;
    case 8:
      name = 'Neptune';
      break;
  }
  return name;
}

//Task_87
//The function pickIt accepts 1 parameter, arr, which is an array of numbers. We need to traverse arr by using a for loop. 
//If an element is an odd number, push it to the odd array, and if it's an even number, push it to the evenarray.
//I've defined two arrays odd and even in the function, and also wrote the return statement. Your work is to write a for loop.

function pickIt(arr){
  var odd=[],even=[];
  //coding here
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      odd.push(arr[i]);
    }
    else {
      even.push(arr[i]);
    }
  }
  return [odd,even];
}

//Task_88
//Give you a function animal, accept 1 parameter:obj like this:
//{name:"dog",legs:4,color:"white"}
//and return a string like this: "This white dog has 4 legs."

function animal(obj){
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
}


//Task_89
//Coding in function trueOrFalse, function accept 1 parameters:val, try to use the conditional statement if...else, 
//if val value is false (val==false or it can convert to false), should return a string "false", if not, return a string "true".

function trueOrFalse(val){
  if (val) return "true";             
  else return "false";
}

//Task_90
//Complete function padIt, which accepts 2 parameters:
//str: a string representing the string to pad. We will pad it with "*" symbols on its left side and on its right side.
//n: a number indicating how many times to pad the string.
//Behaviour
//You need to write a loop statement within the function that loops n times. 
//Each time through the loop it will add one * to str, alternating on which side it is padded: 
//the first time will add a * to the left side of str, the second time will add a * to the right side, and so on.

//Finally, return the padded string.

function padIt(str,n){
  while (n > 0) {
    if (n % 2 == 0) {
      str = str + "*";
    }
    else {
      str = "*" + str;
    }
    n--;
  }
  return str;
}

//Task_90 (2nd version)
function padIt(str,n){
  let counter = 1;
  while(counter <= n){
    if(counter % 2 != 0) str = '*' + str;
    if(counter % 2 == 0) str += '*'
    counter++
  }
  return str
}

//Task_90 (3rd version)
function padIt(str,n){
  let i = 1
  while(i <= n){
    i % 2 !== 0 ? str = "*" + str : str += "*"; 
    i++;
  }
  return str;
}

//Task_91
//Complete the function howManydays. It accepts 1 parameter month, which means the month of the year. 
//Different months have a different number of days as shown in the table below. Return the number of days that are in month. 
//There is no need for input validation: month will always be greater than 0 and less than or equal to 12.

function howManydays(month){
  var days;
  switch (month){
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
      days = 31;
      break;
      case 4:
      case 6:
      case 9:
      case 11:
      days = 30;
      break;
      case 2:
      days = 28;
      break;
  }
  return days;
}


//Task_91 (2nd version)

function howManydays(month){
  var days;
  switch (month){
      case 4:
      case 6:
      case 9:
      case 11:
      days = 30;
      break;
      case 2:
      days = 28;
      break;
      default:
      days = 31;
  }
  return days;
}

//Task_91 (3rd version)

let howManydays = m => {
  var days;
  switch (m) {
    case 4: case 6: case 9: case 11:
      days = 30; break;
    case 2:
      days = 28; break;
    default:
      days = 31;
  }
  return days;
}

//Task_92

//Coding in function grabDoll. function accept 1 parameter:dolls. it's a string array, a list of some dolls.
//You need traverse dolls by using for loop. If element is "Hello Kitty" or "Barbie doll", you should push it to a bag(bag is an array, I've defined in the function); 
//if it's other strings, we should use continue skip it.
//When the bag has three element, bag is full. You should use break jump out the loop; If bag is not full, you should traverse dolls until the last element.
//Return the bag after for loop finished.
//You should use for, break and continue in your code. otherwise, your solution may not pass this kata.

function grabDoll(dolls){
  var bag=[];
  for (let i = 0; i < dolls.length; i++) {
    if (dolls[i] != "Hello Kitty" && dolls[i] != "Barbie doll") continue;
      bag.push(dolls[i]);
    if (bag.length == 3) break;
  }
  return bag;
}

//Task_93
//Coding in function whatNumberIsIt. function accept 1 parameter:n. it's a number.
//To judge the number n. If n is one of the above five constants, return one of these string:
//"Input number is Number.MAX_VALUE"
//"Input number is Number.MIN_VALUE"
//"Input number is Number.NaN"
//"Input number is Number.NEGATIVE_INFINITY"
//"Input number is Number.POSITIVE_INFINITY"
//Other values should return "Input number is xxx". xxx means this number.

function whatNumberIsIt(n){
  if (n === Number.MAX_VALUE) {
    return "Input number is Number.MAX_VALUE";
  }
    else if (n === Number.MIN_VALUE) {
      return "Input number is Number.MIN_VALUE";
  }
    else if (isNaN(n)) {
      return "Input number is Number.NaN";
  }
    else if (n === Number.NEGATIVE_INFINITY) {
      return "Input number is Number.NEGATIVE_INFINITY";
  }
  else if (n === Number.POSITIVE_INFINITY) {
      return "Input number is Number.POSITIVE_INFINITY";
  }
  else {
    return `Input number is ${n}`;
  }
}

//Task_94
//Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
//Example:
//["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
//None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr){
  let newArr = arr.filter((item, index) => !(index % 2));
  return newArr;
}

//Task_94 (2nd version)

function removeEveryOther(arr){
  return arr.filter(function(elem, index) {
    return index % 2 === 0;
  });
}

//Task_94 (3rd version)

function removeEveryOther(arr){
  var newArr=[];
for (var i = 0; i < arr.length; i+=2){
  newArr.push(arr[i]);
  }
return newArr;
}

//Task_94

//The function giveMeFive accepts 1 parameter, obj, which is an object.
//Create an array (which you will eventually return). Then, traverse obj, checking each key and value. 
//If the length of the key is equal to 5, then push the key to your array. Separately, if the length of the value is equal to 5, then push the value to your array.
//At the end, return your array.
//You should use for..in in your code, otherwise your solution may not pass this kata.

function giveMeFive(obj){
  let arr = [];
  for (let key in obj) {
    if (key.length === 5) {
      arr.push(key);
    }
    if (obj[key].length === 5) {
      arr.push(obj[key]);
  }
 }
  return arr;
}


//Task_94 (2nd version)
function giveMeFive(obj){
  var five=[];
  for (var key in obj) {
    if (key.length==5) five.push(key);
    if (obj[key].length==5) five.push(obj[key]);
  }
  return five;
}

//Task_94 (3rd version)
function giveMeFive(obj) {
  const fives = [];
  for (const k in obj) {
    const v = obj[k];
    if (k.length == 5) fives.push(k);
    if (v.length == 5) fives.push(v);
  }
  return fives;
}

//Task_95
//I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
//P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
  let sum1 = 0; let sum2 = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum1 = sum1 + arr1[i];
  }
  for (let j = 0; j < arr2.length; j++) {
    sum2 = sum2 + arr2[j];
  }
  return sum1 + sum2;
}

//Task_95 (2nd version)
function arrayPlusArray(arr1, arr2) {
  let arr = [...arr1, ...arr2];
  return arr.reduce((a, b) => a + b);
}

//Task_96
//The code provided is supposed replace all the dots . in the specified String str with dashes -
//But it's not working properly.
//Fix the bug so we can all go home early.
//Notes: String str will never be null.

(initial version):
var replaceDots = function(str) {
  return str.replace(/./, '-');
}

(correct version): 
//"." - это спецсимвол, его нужно экранировать; 
//g - флаг глобального поиска (поиск идёт по всей строке (все вхождения), а не до первого вхождения).

var replaceDots = function(str) {
  return str.replace(/\./g, '-');   
}


//Task_97
//Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. 
//To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - 
//otherwise the tail wouldn't fit!
//If the tail is right return true, else return false.
//The arguments will always be non empty strings, and normal letters.

	/////// (initial version):

function correctTail(bod, tail ;

  sub = body.substr(bodylength-(tail.length)
  
  if sub = tail) ;
    return true
  }
  else 
    return false
	

	/////// (correct version):

function correctTail(body, tail) {
  sub = body.substr(-1);
  if (sub == tail) {
    return true;
  }
  else {
    return false;
  }
}

//Task_97 (2nd version)
function correctTail(bod, tail) {
  return bod[bod.length-1] === tail
}

//Task_97 (3rd version)
const correctTail = (x,y)=>x.endsWith(y)

//Task_97 (3rd version)(2)
const correctTail = (body, tail) => body.endsWith(tail)


//Task_97 (4th version)
function correctTail(body, tail){
  return (tail == body.charAt(body.length-1))? true:false;
}

//Task_98
Debug celsius converter
Your friend is traveling abroad to the United States so he wrote a program to convert fahrenheit to celsius. Unfortunately his code has some bugs.
Find the errors in the code to get the celsius converter working properly.
To convert fahrenheit to celsius: celsius = (fahrenheit - 32) * (5/9).
Remember that typically temperatures in the current weather conditions are given in whole numbers. 
It is possible for temperature sensors to report temperatures with a higher accuracy such as to the nearest tenth. 
Instrument error though makes this sort of accuracy unreliable for many types of temperature measuring sensors.

         /////// (initial version):
	 
function weatherInfo (temp) {
  var c : convert(temp)
  if (c > 0)
    return (c + " is freezing temperature")
  else
    return (c + " is above freezing temperature")
}

function convertToCelsius (temperature) {
  var celsius = (temperatur) - 32 + (5/9)
  return temperature
}

         /////// (correct version):
		 
function weatherInfo (temp) {
  var c = (temp - 32) * (5/9);
  if (c < 0) {
    return (c + " is freezing temperature")
    }
  else {
    return (c + " is above freezing temperature")
  }
}


//Task_99
//Your friend has been out shopping for puppies (what a time to be alive!)... He arrives back with multiple dogs, and you simply do not know how to respond!
//By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.
//The number of dogs will always be a number and there will always be at least 1 dog.

function howManyDalmatians(number) {
  let dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
  let respond = (number <= 10) ? dogs[0] : 
  (number <= 50) ? dogs[1] : 
  (number === 101) ? dogs[3] : 
  dogs[2];
return (respond);
}

//Task_100
//Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:
//multiply(3)==15 // 3 * 5¹
//multiply(10)==250 // 10 * 5²
//multiply(200)==25000 // 200 * 5³
//multiply(0)==0 // 0 * 5¹
//multiply(-3)==-15 // -3 * 5¹

function multiply(number){
  let sT = String(number).length;
  if (number < 0) {
    sT = String(number).length - 1;
  }
  let s = Math.abs(sT);
  return (number * Math.pow(5, s));
}

//Task_100 (2nd version)
function multiply(number) {
  return number * Math.pow(5, Math.abs(number).toString().length);
}

//Task_101
//Return the number (count) of vowels in the given string.
//We will consider a, e, i, o, u as vowels for this Kata (but not y).
//The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
      sum += 1;
    }
  }
  return sum;
}


//Task_102
//Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
//For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
//Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-35)
//Note: The function accepts an integer and returns an integer.

function squareDigits(num){
  let numStr = String(num);
  let arr = [];
  for (let i = 0; i < numStr.length; i++) {
    arr.push(Math.pow(Number(numStr[i]), 2));
  }
  return Number(arr.join(''));
}

//Task_102 (2nd version)
function squareDigits(num){
    var string = num.toString();
    var results = [];
    for (var i = 0; i < string.length; i++){
        results[i] = string[i] * string[i];
    }
    return Number(results.join(''));
};

//Task_103
//Implement a function that accepts 3 integer values a, b, c. 
//The function should return true if a triangle can be built with the sides of given length and false in any other case.
//(In this case, all triangles must have surface greater than 0 to be accepted).

function isTriangle(a,b,c)
{
  if (a == 0 || b == 0 || c == 0) {
     return false;
  }
  else if ((a + b) <= c) {
    return false;
  } else if ((a + c) <= b) {
   return false;
  } 
  else if ((b + c) <= a) {
   return false;
  }
  else {
    return true;
  }
}

//Task_103 (2nd version)
function isTriangle(a,b,c)
{
   return a + b > c && a + c > b && c + b > a;
}

//Task_104
The Story:
Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. 
With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! 
He wants you to write a simple program telling him if he will be able to fit all the passengers.
Task Overview:
You have to write a function that accepts three parameters:
cap - is the amount of people the bus can hold excluding the driver.
on - is the number of people on the bus excluding the driver.
wait - is the number of people waiting to get on to the bus excluding the driver.
If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

Usage Examples:
cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting

function enough(cap, on, wait) {
  if (wait + on <= cap) {
    return 0;
  }
  else {
    return on + wait - cap;
  }
}

//Task_105
//Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
//In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
//Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. 
//DNA strand is never empty or there is no DNA at all (again, except for Haskell).
//More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)
//Example: (input --> output)
//"ATTGC" --> "TAACG"
//"GTAT" --> "CATA"

function DNAStrand(dna){
  let arr = dna.split('');
  let arr2 = arr.map(function(item){
    if (item == "A") {
      return "T";
    }
    if (item == "T") {
      return "A";
    }
    if (item == "G") {
      return "C";
    }
    if (item == "C") {
      return "G";
    }
  })
  return arr2.join('');
}


//Task_105 (2nd version)

function DNAStrand(dna){
	var complements = {
  	A: 'T',
    T: 'A',
    C: 'G',
    G: 'C'
  };
	return dna.split('').map(function(char) {
		return complements[char];
  }).join('');
}

//Task_106
//Trolls are attacking your comment section!
//A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
//Your task is to write a function that takes a string and return a new string with all vowels removed.
//For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
//Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
  let newStr = str.replace(/[aouei]/gi, '');
  return newStr;
}

//Task_107
//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
//Examples
//highAndLow("1 2 3 4 5");  // return "5 1"
//highAndLow("1 2 -3 4 5"); // return "5 -3"
//highAndLow("1 9 3 4 -5"); // return "9 -5"

function highAndLow(numbers){
  let arr = numbers.split(' ');
  for (let i = 0; i < arr.length; i++) {
    parseInt(arr[i]);
  }
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return `${max} ${min}`;
}

//Task_107 (2nd version)(shorter)

function highAndLow(numbers){
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}


//Task_107 (3rd version)

function highAndLow(numbers){
  let arr = numbers.split(' ').map(Number);  
  return Math.max(...arr) + ' ' + Math.min(...arr);
}


//Task_107 (4th version)
function highAndLow(numbers) {
  var arr = numbers.split(" ");
  return Math.max.apply(null, arr) + ' ' + Math.min.apply(null, arr);
}

//Task_108
You are going to be given a word. Your job is to return the middle character of the word. 
If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"


function getMiddle(s)
{ let middleIndex;
  if (s.length % 2 !== 0) {
    return s[Math.round(s.length / 2 - 1)];
  }
 else if (s.length % 2 == 0) {
   return `${s[s.length / 2 - 1]}${s[(s.length / 2 )]}`;
 }
}

//Task_108 (2nd version)

function getMiddle(s) {
  var middle = s.length / 2;
  return (s.length % 2) 
    ? s.charAt(Math.floor(middle))
    : s.slice(middle - 1, middle + 1);
}

//Task_109
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

function XO(str) {
  let countOfx = 0;
  let countOfo = 0;
  for (let i = 0; i < str.length; i++) {
      if (str[i] == 'x' || str[i] == 'X') {
        countOfx += 1;
      }
    else if (str[i] == 'o' || str[i] == 'O') {
        countOfo += 1;
    }
  }
    if (countOfx == countOfo) {
      return true;
    }
  else {
    return false;
  }
}

//Task_109 (2nd version)
function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}

//Task_109 (3rd version)

function XO(str) {
    var a = str.replace(/x/gi, ''),
        b = str.replace(/o/gi, '');
    return a.length === b.length;
}

//Task_109 (4th version)

function XO(str) {
  var sum = 0;
  for(var i=0; i<str.length; i++){
    if(str[i].toLowerCase() == 'x') sum++;
    if(str[i].toLowerCase() == 'o') sum--;
  }
  return sum == 0;
}


//Task_110
A square of squares
You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!
However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! 
If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

Task
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Examples
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false

var isSquare = function(n){
  let num = Math.sqrt(n);
  if (num >= 0 && Number.isInteger(num) == true) {
    return true;
  } 
    else {
      return false;  
    }
}


//Task_110 (2nd version)
function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}

//Task_110 (2nd version - different syntax)
var isSquare = function(n){
  return Math.sqrt(n) % 1 === 0 ? true : false;
};


//Task_110 (3rd version)
const isSquare = n => Number.isInteger(Math.sqrt(n));



//Task_110 (3rd version - different syntax)
var isSquare = function(n){
  return Number.isInteger(Math.sqrt(n));
}


//Task_111
//Return the type of the sum of the two arguments

function typeOfSum(a, b) {
  return typeof(a + b);
}

//Task_112
Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0

Examples
'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1

function sameCase(a, b){
  if (a.toUpperCase() == a.toLowerCase() || b.toUpperCase() == b.toLowerCase()) {
    return -1;
  }
  else if (a == a.toUpperCase() && b == b.toUpperCase() || a == a.toLowerCase() && b == b.toLowerCase()) {
    return 1;
  }
  return 0;
}


//Task_113
There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

number of pillars (≥ 1);
distance between pillars (10 - 30 meters);
width of the pillar (10 - 50 centimeters).

Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

function pillars(numPill, dist, width) {
  if (numPill == 1) {
    return 0;
  }
  else {
  let distance = dist * (numPill - 1) * 100 + width * (numPill - 2);
  return distance;
}
}


//Task_114
Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.
Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1

If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". 
Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

Note: there will always be exactly one wolf in the array.

Examples
Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

Input: ["sheep", "sheep", "wolf"]
Output: "Pls go away and stop eating my sheep"


function warnTheSheep(queue) {
  let wolfNumber = queue.indexOf('wolf');
  let sheepNumber = queue.length - wolfNumber - 1;
  if (wolfNumber == (queue.length - 1)) {
    return "Pls go away and stop eating my sheep";
  }
  else {
    return `Oi! Sheep number ${sheepNumber}! You are about to be eaten by a wolf!`
  }
}



//Task_115
Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.

function findShort(s){
  let arr = s.split(" ");
  let shortest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length < shortest.length) {
      shortest = arr[i];
    }
  }
  return shortest.length;
}


//Task_116
Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2), write a function elevator accepting 3 arguments (in order):

left - The current floor of the left elevator
right - The current floor of the right elevator
call - The floor that called an elevator
It should return the name of the elevator closest to the called floor ("left"/"right").

In the case where both elevators are equally distant from the called floor, choose the elevator to the right.

You can assume that the inputs will always be valid integers between 0-2.

Examples:

elevator(0, 1, 0); // => "left"
elevator(0, 1, 1); // => "right"
elevator(0, 1, 2); // => "right"
elevator(0, 0, 0); // => "right"
elevator(0, 2, 1); // => "right"

function elevator(left, right, call){
  if (Math.abs(call - left) == Math.abs(call - right)) {
    return "right";
  }
  else if (Math.abs(call - left) < Math.abs(call - right)) {
    return "left";
  }
  else {
    return "right";
  }
}

//Task_116 (2nd version)
function elevator(left, right, call) {
  return Math.abs(call - left) < Math.abs(call - right) ? 'left' : 'right';
}

//Task_116 (3rd version)
const elevator = (left, right, call) => Math.abs(call-left) < Math.abs(call-right) ? 'left' : 'right'

//Task_117
// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 1(2)+2(2)+2(2)=9

function squareSum(numbers){
let result = 0;
  for (let i = 0; i < numbers.length; i++) {
  result += numbers[i] * numbers[i];
  }
  return result;
}

//Task_118
/* Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

Notes:

our team always plays 10 matches in the championship
0 <= x <= 4
0 <= y <= 4
*/

