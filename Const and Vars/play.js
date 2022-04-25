// --- Const and Vars --- //

// --- Constants (const) --- //

// As we know we can create string and number variables using the 'let' keyword

let ummmmmmm = 1343.2353;

//Output is "1343.2353"
ummmmmmm

let aaaaannn = "what?";

//Output is "what?"
aaaaannn

//'const' can be used to create variables the same way 'let' does

const one = 1;

//Output is "1"
one

//Output is ERROR Uncaught TypeError: Assignment to constant variable.  at "the line that you put the code"
one += 1;

//That's weird... the variable cannot be changed.  
//^^^ This might be one of the thoughts going through your head.

//That is because unlike using 'let' to create a variable, when using 'const' you are saying that the variable CANNOT be changed

//so once you set a 'const' the only way to change it is to change the initial creation of it within the .js file otherwise whatever you assigned it as is what it is.  Hence the full name of 'const'; Constant

//Look at this example

//People are born with 2 eyes
const eyes = 2;
//2 arms
const arms = 2;
//and 2 legs
const legs = 2;

//or
const daysInWeek = 7;


// --- Variable(var) --- //

//Using 'var' the same way that 'const' and 'let' are used is another way to create variables.  Although it is an old way and not used as much anymore it is still acceptable.

//EXAMPLE tiiiiiiiimmme

var feetInMile = 5280;

//Output is "5280"
feetInMile

//Just like 'let' we can modify the data within this variable.

feetInMile = "a lot";

//Output is "a lot";
feetInMile

//I may not have mentioned this before but you can change the data type on 'let' and 'var'

//This is just info.  Do your best to avoid using var.  Stick with 'const' and 'let'