//This is the Is Truthy portion of the assignment 
//1. Use if/else if/else statements 
//2. Set up the statements to print below rules: If the value is truthy, print true;
//If the value is falsy, print the corresponding result: "The boolean value false is falsy";"The null value is falsy";"undefined is falsy";"The number 0 is falsy (the only falsy number)";"The empty string is falsy (the only falsy string)";

const input1a = "I am a string";
const input1b = false;
const input1c = null;
const input1d = undefined;
const input1e = 0;
const input1f = "";
let test1 = input1a

//can just switch out the values below to test the if/else if/else statement

if (test1 === "I am a string") {
  console.log(true);
} else if (test1 === false) {
  console.log("The boolean value false is falsy");
} else if (test1 === null) {
  console.log("The null value is falsy");
} else if (test1 === undefined) {
  console.log("undefined is falsy");
} else if (test1 === 0) {
  console.log("The number 0 is falsy (the only falsy number)");
} else {
  console.log("The empty string is falsy (the only falsy string)");
}

//This is the Number Line portion of the assignment. 
// 1. Need to use if/else if/else 
// 2. Set up 6 summations consisted of 2 different numbers 
// 3. Set up if/else if/else statements that determines the value and relative statements per: sum + " is less than -1000";sum + " is a negative number"; sum + " is equal to 0"; sum + " is larger than 0";sum + " is greater than 100"; 

const num1a=50
const num2a=51
const num1b=99
const num2b=-2
const num1c=0
const num2c=101
const num1d=500
const num2d=-500
const num1e=-1000
const num2e=0
const num1f=-5
const num2f=0

const sum1=num1a+num2a
const sum2=num1b+num2b //there is a discrepancy in wording for the assignment on this one - in the equation example, it says "sum + " is larger than 0" but in the table section, it says that it is expected to print "97 is greater than 0
const sum3=num1c+num2c
const sum4=num1d+num2d
const sum5=num1e+num2e
const sum6=num1f+num2f

//can just switch out the values below to test the if/else if/else statement

let test2=sum1

if (test2<-1000) {console.log (test2+' is less than -1000');
} else if (test2<0) {console.log (test2+' is a negative number');
} else if (test2==0) {console.log (test2+' is equal to 0');
} else if (100>test2>0) {console.log (test2+' is larger than 0');
} else {console.log (test2+' is greater than 100');
}

//This is the Greater Than Or Equal to 5 portion of the assignment. 
// 1. Use if/else statements 
// 2. Use && to determine if the two numbers a set are all greater than 5
// 3. Make sure the statements are printed correctly per the determination

const int1a=5
const int1b=6
const int2a=10
const int2b=11
const int3a=0
const int3b=0
const int4a=1000
const int4b=-1000
const int5a=6
const int5b=4
const int6a=5
const int6b=5

//can just switch out the values below to test the if/else statement

let val1=int1a
let val2=int1b

if (val1 && val2 >= 5) {
  console.log (true);
} else {  console.log (false);
}

//This is the Pair and Compare portion of the assignment. 
// 1. Use if/else statements 
// 2. Use || to determine if the any one of the two pairs match each other
// 3. Make sure the statements are printed correctly per the determination

const param11a='cat'
const param11b='cat'
const param12a=6
const param12b='6'
const param21a='five'
const param21b=5
const param22a='dog'
const param22b='dawg'
const param31a=0
const param31b=false
const param32a='horse'
const param32b='horse'
const param41a='eight'
const param41b='eight'
const param42a='ate'
const param42b='ate'
const param51a=11
const param51b='eleven'
const param52a='four'
const param52b='for'
const param61a='cake'
const param61b='cake'
const param62a='pie'
const param62b='pie'

//can just switch out the values below to test the if/else statement

let firstpairval1=param11a
let firstpairval2=param11b
let secondpairval1=param12a
let secondpairval2=param12b

if (firstpairval1===firstpairval2||secondpairval1===secondpairval2) {
  console.log (true);
} else{
  console.log (false);
}