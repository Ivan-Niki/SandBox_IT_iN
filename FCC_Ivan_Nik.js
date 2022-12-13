// Task_7

var a;
var b;
var c;
a = 5;
b = 10;
c = "I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";

// Task_8

// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// Task_9
let catName = "Oliver";
let catSound = "Meow!";

// Task_10 ==> Declare a Read-Only Variable with the const Keyword
const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

// Task_11 ==> Add Two Numbers with JavaScript
const sum = 10 + 10;

// Task_12 ==> Subtract One Number from Another with JavaScript
const difference = 45 - 33;

// Task_13 ==> Multiply Two Numbers with JavaScript
const product = 8 * 10;

// Task_14 ==> Divide One Number by Another with JavaScript
const quotient = 66 / 33;


// Task_15 ==> Increment a Number with JavaScript
let myVar = 87;

// Only change code below this line
myVar++;

// Task_16 ==> Decrement a Number with JavaScript
let myVar = 11;

// Only change code below this line
myVar--;

// Task_17 ==> Create Decimal Numbers with JavaScript
const ourDecimal = 5.7;

// Only change code below this line
const myDecimal = 5.3;

// Task_18 ==> Multiply Two Decimals with JavaScript
const product = 2.0 * 2.5;

// Task_19 ==> Divide One Decimal by Another with JavaScript
const quotient = 4.4 / 2.0; // Change this line

// Task_20 ==> Finding a Remainder in JavaScript
const remainder = 11 % 3;

// Task_21 ==> Compound Assignment With Augmented Addition
let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7;

// Task_22 ==> Compound Assignment With Augmented Subtraction
let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;

// Task_23 ==> Compound Assignment With Augmented Multiplication
let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10;

// Task_24 ==> Compound Assignment With Augmented Division
let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;


// Task_25 ==> Escaping Literal Quotes in Strings
const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line


// Task_26 ==> Quoting Strings with Single Quotes
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// Task_27 ==> Escape Sequences in Strings
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line


// Task_28 ==> Concatenating Strings with Plus Operator
const myStr = "This is the start. " + "This is the end."; // Change this line

// Task_29 ==> Concatenating Strings with the Plus Equals Operator
let myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";


// Task_30 ==> Constructing Strings with Variables
const myName = "Ivan";
const myStr = "My name is " + myName + "and I am well!";

// Task_31 ==> Appending Variables to Strings
const someAdjective = "cool";
let myStr = "Learning to code is ";
myStr += someAdjective;

// Task_32 ==> Find the Length of a String
// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;


// Task_33 ==> Use Bracket Notation to Find the First Character in a String
// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0];

// Task_34 ==> Understand String Immutability
// Setup
let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line

// Task_35 ==> Use Bracket Notation to Find the Nth Character in a String
// Setup
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line

// Task_35 ==> Use Bracket Notation to Find the Last Character in a String
// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length -1]; // Change this line

// Task_36 ==> Use Bracket Notation to Find the Nth-to-Last Character in a String
// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length -2]; // Change this line

// Task_36 ==> Word Blanks
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = "He saw a " + myAdjective + " " + myNoun + " " + "and " + myVerb + " " + myAdverb + "."; // Change this line
// Only change code above this line

// Task_37 ==> Store Multiple Values in one Variable using JavaScript Arrays
// Only change code below this line
const myArray = ["learning", 34];

// Task_38 ==> Nest one Array within Another Array
// Only change code below this line
const myArray = [["running", 25], ["basketball", 17]];

// Task_39 ==> Access Array Data with Indexes
const myArray = [50, 60, 70];
const myData = myArray[0];

// Task_40 ==> Modify Array Data With Indexes
// Setup
const myArray = [18, 64, 99];

// Only change code below this line
myArray[0] = 45;

// Task_41 ==> Access Multi-Dimensional Arrays With Indexes
const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];

// Task_42 ==> Manipulate Arrays With push()
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray.push(["dog", 3]);

// Task_43 ==> Manipulate Arrays With pop()
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
const removedFromMyArray = myArray.pop();

// Task_44 ==> Manipulate Arrays With shift()
// Setup
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
const removedFromMyArray = myArray.shift();

// Task_45 ==> Manipulate Arrays With unshift()
// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35]);

// Task_46 ==> Shopping List
const myList = [
    ["Milk", 2],
    ["Apples", 5],
    ["Oranges", 3],
    ["Eggs", 10],
    ["Potato", 7]
];

// Task_47 ==> Write Reusable JavaScript with Functions
function reusableFunction() {
    console.log("Hi World");
}
reusableFunction();

// Task_48 ==> Passing Values to Functions with Arguments
function functionWithArgs(param1, param2) {
    console.log(param1 + param2);
}
  functionWithArgs(7,9);

  // Task_49 ==> Return a Value from a Function with Return
function timesFive(num) {
    return num * 5;
}
const answer = timesFive(9);

// Task_50 ==> Global Scope and Functions

// Declare the myGlobal variable below this line
let myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

