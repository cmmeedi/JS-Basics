//Just numbers can be written in the console
// !!! Example !!!

1
89
324.5234

//Numbers are just numbers in JS there's no int, float, double, long
// JS will take any number and know what it is

//The numbers decimal length is finite though
// !!! Example !!!

//This number below will output as is
1.999999999999999
//This number on the other hand will actually output as 2
//Numbers decimal lengths are finite in JS
1.9999999999999999

// Operators work in JS as well

//This will output 12
4 + 3

//Output is 4
2 * 2

//Output is 2
10 / 5

//Output is 0.4
2 / 5

//Just like what i learned in PreCal there is an order of operations
//PEMDAS
//Parenthesis, Exponents, Multiplication, Division, Addition, Subtraction

// 3 * 5 will be the first in the order although it's not the first in the order of the equation.  the 2 + 15 '15' being the product of 3 * 5 
//Outputs is 17
2 + 3 * 5

// Output is 25
// What is in the parenthesis will be first in the order then multiplication.  
//Remember 'P' then 'M'
(2 + 3) * 5

//There's no reason to write comments in the console.  They're really only for the .js filetypes.  Unless showing something to a group or another person writing comments in the console is not necessary

//This is the Modulo Operator.  It is used to return the remainder of an equation

//Output is 0
9 % 3

//3 goes into 9 three times leaving no remainder

//Output is 1
2 % 15

//2 goes into 15 seven times leaving a remainder of 1

//Modulo is frequently referred to as the Mod operator


//The final operator is the Exponent operator

//Output is 15
2 ** 4

// 2 * 2 * 2 * 2
// 2 * 2 = 4
//4 * 2 = 8
//8 * 2 = 16


// --- NaN ---//

//NaN stands for "Not a Number"

//Output is 'NaN'
0/0
//that is literally what the console will output because nothing divided by nothing equals nothing
//Nothing

// --- typeof ---//
//Output is 'Number'
typeof 4

//Output is 'Number'
11.453

//Output is 'String'
typeof 'sup'

//typeof will output what the data type is as long as the datatype input is correct

//This part can be a tad confusing but look below

//Output is "number"
typeof NaN

//Although it stands for "Not a Number" JS thinks NaN is a number.  

//If NaN is included in any equation at all the output will be 'NaN'
//NaN rules Trumps all equation combinations