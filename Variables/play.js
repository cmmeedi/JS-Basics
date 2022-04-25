// --- Variables --//

//This is how to create a variable
let something = 'value';

// now if i were to type 'something' into the console it would output "value"

//Output is "String"
typeof something

//Here the Variable 'year' is an int that equals 1985
let year = 1985;

//Get used to adding semicolons at the end of each declaration.  It will come in handy down the roads

//The two variables below are number variables and although their names are words they will output numbers
let numCats = 2;
let numPeople = 1;

//Output is "3"
numCats + numPeople

//although the two variables have been added together, the variables remain unchanged.  

//Now make a new variable that adds together the two variables that have been variabled... variable
numBeings = numCats + numPeople

//Output is "3"
numBeings

//Still 'numCats' and 'numPeople' remain unchanged.  on the other hand numBeings now equals 3

//Variables can be updated.

numCats = 3;

//Output is "3"
numCats

//Now remember numCats now equals 3
//Another way to update a variable which might make more sense to some is:

numCats = numCats + 2;

//Output is "5"
numCats

//Remember 'numBeings'? well that value is unchanged

//Output is "3"
numBeings

//This is because of the Order of Operations.  The Variable was created before we changed numCats so that piece of data remembers the value of 'numCats + numPeople' before 'numCats' was changed

//To update it the variable needs to be reinitialized as we did before.  The same exact way

numBeings = numCats + numPeople;

//Think creating an HTML document and save it to your desktop.  You also create a CSS document and save it to your desktop.  You make copies of them and put them in a folder called 'Website' within your 'documents' folder.  The next day you edit the HTML document THAT IS ON YOUR DESKTOP.  Well the one in the 'Website' folder does not contain these updates so you have to save it to your 'Website' folder in your 'Documents' folder in order for your website to be updated.

//That is the Order of Operations.  Create, Save, Update, Save.
//Ctrl-S


// --- Updating Variables --- //

let score = 0;

//Output is "0"

score = 5;

//Output is "5"
score

//This is another way to add to a variable that is referred to as "Shorthand".  It does not look like it makes sense but it is commonly used by developers

score += 1;

//Output is "6"
score

//This syntax is the same as writing
score = score + 1;

//Output is "7"
score

//Set the score back to 5 using the shorthand syntax

score -= 2;

//Output is "5"
score

//The shorthand syntax can be used to subtract, add, multiply and divide the variable

//Incrementing and Decrementing a number is the most common use of the shorthand syntax

score += 1;

//Output is "6"
score

score -= 1;

//Output is "5"
score

//Another shorthand syntax is like below

score--

//Output is "4"
score

//This is the most common way to decrement a variable and i encourage others to use this way as it is much easier to understand.

//Increment the variable back to 5 using the shorthand syntax that i just suggested

score++

//Output is "5"
score

//This syntax will only work with -- and ++
//There is not yet a multiplication or division use of this syntax