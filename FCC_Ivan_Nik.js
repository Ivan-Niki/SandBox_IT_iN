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

// Task_50 ==> Local Scope and Functions
function myLocalScope() {
  // Only change code below this line
const myVar = "Hello";
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);

// Task_51 ==> Global vs. Local Scope in Functions
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
const outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();

// Task_52 ==> Understanding Undefined Value returned from a Function
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();

// Task_53 ==> Assignment with a Returned Value
// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);

// Task_54 ==> 


// Task_55 ==> Understanding Boolean Values
function welcomeToBooleans() {
  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}


// Task_56 ==> Use Conditional Logic with If Statements
function trueOrFalse(wasThatTrue) {
  // Only change code below this line
if (wasThatTrue) {
  return "Yes, that was true";
}
return "No, that was false"

  // Only change code above this line

}

// Task_57 ==> Comparison with the Equality Operator
// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);

// Task_58 ==> Comparison with the Strict Equality Operator
// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);

// Task_59 ==> Practice comparing different values
// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");

// Task_60 ==> Comparison with the Inequality Operator
// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);

// Task_61 ==> Comparison with the Strict Inequality Operator
// Setup
function testStrictNotEqual(val) {
  if (val !== 17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);

// Task_62 ==> Comparison with the Greater Than Operator
function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);

// Task_63 ==> Comparison with the Greater Than Or Equal To Operator
function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);

// Task_64 ==> Comparison with the Less Than Operator
function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);

// Task_65 ==> Comparison with the Less Than Or Equal To Operator
function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);

// Task_66 ==> Comparisons with the Logical And Operator
function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
      return "Yes";
    }


  // Only change code above this line
  return "No";
}

testLogicalAnd(10);

// Task_67 ==> Comparisons with the Logical Or Operator
function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }
  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);

// Task_68 ==> Introducing Else Statements
function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }

  else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);

// Task_69 ==> Introducing Else If Statements
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  else if (val < 5) {
    return "Smaller than 5";
  }

  else {
    return "Between 5 and 10";
  }
}

testElseIf(7);

// Task_70 ==> Logical Order in If Else Statements
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);

// Task_71 ==> Chaining If Else Statements
function testSize(num) {
  // Only change code below this line
if (num < 5) {
  return ("Tiny");
} else if (num < 10) {
  return ("Small");
} else if (num < 15) {
  return ("Medium");
} else if (num < 20) {
  return ("Large");
} else {
  return ("Huge");
  }
  // Only change code above this line
}

testSize(7);

// Task_72 ==> Golf Code
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
if (strokes == 1) {
  return "Hole-in-one!";
} else if (strokes <= par - 2) {
  return "Eagle";
} else if (strokes == par - 1) {
  return "Birdie";
} else if (strokes == par) {
  return "Par";
} else if (strokes == par + 1) {
  return "Bogey";
} else if (strokes == par + 2) {
  return "Double Bogey";
} else if (strokes >= par + 3) {
  return "Go Home!";
}
  // Only change code above this line
}

golfScore(5, 4);

// Task_73 ==> Selecting from Many Options with Switch Statements
function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
switch (val) {
  case 1: 
  answer = 'alpha';
  break;
  case 2: 
  answer = 'beta';
  break;
  case 3: 
  answer = 'gamma';
  break;
  case 4: 
  answer = 'delta';
  break;
}

  // Only change code above this line
  return answer;
}

caseInSwitch(1);

// Task_74 ==> Adding a Default Option in Switch Statements
function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
switch (val) {
  case "a":
  answer = "apple";
  break;
  case "b":
  answer = "bird";
  break;
  case "c":
  answer = "cat";
  break;
  default:
  answer = "stuff";
  break;
}

  // Only change code above this line
  return answer;
}

switchOfStuff(1);

// Task_75 ==> Multiple Identical Options in Switch Statements
function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
switch (val) {
  case 1:
  case 2:
  case 3:
  answer = "Low";
  break;
  case 4:
  case 5:
  case 6:
  answer = "Mid";
  break;
  case 7:
  case 8:
  case 9:
  answer = "High";
  break;
}
  // Only change code above this line
  return answer;
}

sequentialSizes(1);

// Task_76 ==> Replacing If Else Chains with Switch
function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line

  switch (val) {
    case "bob":
    answer = "Marley";
    break;
    case 42:
    answer = "The Answer";
    break;
    case 1:
    answer = "There is no #1";
    break;
    case 99:
    answer = "Missed me by this much!";
    break;
    case 7:
    answer = "Ate Nine";
    break;
  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);

// Task_77 ==> Returning Boolean Values from Functions
function isLess(a, b) {
  // Only change code below this line
    return (a < b);
  // Only change code above this line
}

isLess(10, 15);

// Task_78 ==> Return Early Pattern for Functions
// Setup
function abTest(a, b) {
  // Only change code below this line
if (a < 0 || b < 0) {
  return undefined;
}


  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);

// Task_79 ==> Counting Cards
let count = 0;

function cc(card) {
  // Only change code below this line
switch (card) {
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
  count++;
  break;
  case 10:
  case 'J':
  case 'Q':
  case 'K':
  case 'A':
  count--;
  break;
}
if (count > 0) {
  return count + " Bet";
} else {
  return count + " Hold";
}

  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

// Task_80 ==> Build JavaScript Objects
const myDog = {
  // Only change code below this line
name: "Jack",
legs: 5,
tails: 1,
friends: ["Kate", "Dima", "Ivan"]

  // Only change code above this line
};

// Task_81 ==> Accessing Object Properties with Dot Notation
// Setup
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;    // Change this line

// Task_82 ==> Accessing Object Properties with Bracket Notation
// Setup
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj["an entree"];   // Change this line
const drinkValue = testObj["the drink"];    // Change this line

// Task_83 ==> Accessing Object Properties with Variables
// Setup
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line
const playerNumber = 16;  // Change this line
const player = testObj[playerNumber];   // Change this line

// Task_84 ==> Updating Object Properties
// Setup
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
myDog.name = "Happy Coder";

// Task_85 ==> Add New Properties to a JavaScript Object
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog["bark"] = "woof";

// Task_86 ==> Delete Properties from a JavaScript Object
// Setup
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line
delete myDog.tails;

// Task_87 ==> Using Objects for Lookups
// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  const lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
result = lookup[val];
  // Only change code above this line
  return result;
}

phoneticLookup("charlie");

// Task_88 ==> Testing Objects for Properties
function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp)) {
  return obj[checkProp];
    } else {
      return "Not Found";
  }
  // Only change code above this line
}

// Task_89 ==> Manipulating Complex Objects
const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Valeriy Kipelov",
    "title": "Babylon",
    "release_year": 2004,
    "formats": [
      "CD",
      "8T",
      "LP"
    ]
  }
];

// Task_90 ==> Accessing Nested Objects
const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"];

// Task_91 ==> Accessing Nested Arrays
const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];

// Task_92 ==> Local Scope and Functions
function myLocalScope() {
  // Only change code below this line
let myVar = "Hello!";
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);

// Task_93 ==> Iterate with JavaScript While Loops
// Setup
const myArray = [];
let i = 5;
while (i <= 5 && i >= 0) {
myArray.push(i);
i--;
}

// Only change code below this line

// Task_94 ==> Iterate with JavaScript For Loops

// Setup
const myArray = [];

// Only change code below this line
for (let i = 1; i < 6; i++) {
  myArray.push(i);
}

// Task_95 ==> Iterate Odd Numbers With a For Loop
// Setup
const myArray = [];

// Only change code below this line
for (let i = 1; i < 10; i+=2) {
  myArray.push(i);
}

// Task_96 ==> Count Backwards With a For Loop
// Setup
const myArray = [];

// Only change code below this line
for (let i = 9; i > 0; i-=2) {
  myArray.push(i);
}

// Task_96 ==> Iterate Through an Array with a For Loop
// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
let total = 0;
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

// Task_97 ==> Nesting For Loops
function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    product *= arr[i][j];
  }
}
  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);


// Task_98 ==> Use the parseInt Function
function convertToInteger(str) {
  return parseInt(str);
}

convertToInteger("56");

// Task_99 ==> Use the parseInt Function with a Radix
function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger("10011");

// Task_100 ==> Stand in Line
function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  let result = arr.shift();
  return result;
  // Only change code above this line
}

// Task_101 ==> Iterate with JavaScript Do...While Loops
// Setup
const myArray = [];
let i = 10;

// Only change code below this line
 do {
  myArray.push(i);
  i++;
} while (i < 5);

// Task_102 ==> Use the Conditional (Ternary) Operator
function checkEqual(a, b) {
  return a == b ? "Equal" : "Not Equal";
  }
  
  checkEqual(1, 2);

 // Task_103 ==> Use Multiple Conditional (Ternary) Operators
 function checkSign(num) {
  return (num > 0) ? "positive"
  : (num < 0) ? "negative"
  : "zero";
  }
  
  checkSign(10);

 // Task_104 ==> Generate Random Fractions with JavaScript

 function randomFraction() {

  // Only change code below this line

  return Math.random();

  // Only change code above this line
}

// Task_105 ==> Generate Random Whole Numbers with JavaScript

function randomWholeNum() {

  // Only change code below this line

  return Math.floor(Math.random() * 10);
}

// Task_106 ==> Generate Random Whole Numbers within a Range

function randomRange(myMin, myMax) {
  // Only change code below this line
  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
  // Only change code above this line
}







// REGULAR EXPRESSIONS
// Task_200 ==> Using the Test Method
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line
