//Strings are pretty simple

let thisString = 'word';

//Output is 'word'
thisString;

//Stay consistent in using single quotes when creating a String.

thisString = 'new word';

//Output is 'new word';
thisString

//There may be a point when a quote within a string needs to be output and using double quotes for both the String declaration and the quote within the String will confuse the console

thisString = '"quote"';

//Output is '"quote"';

//Strings have Indices which is a fancy word for numbered positions

thisString = 'word';

/*There are 4 letters in word. 
0 = w
1 = o
2 = r
3 = d
*/

//Here is an example to see what letter is at position 1

//Output is 'o'
thisString[1];

//What is happening is the word is being put in what is called an Array.  We will talk about that more later.  

//When using Arrays each element is indexed and the starting index will always be 0

//The length of the string can also be displayed using

//Output is 4
thisString.length

//Cat lovers created something called Concatenate
//To concatenate is to combine strings to make a sentence

// !!! EXAMPLE TIME !!!

//Output is 'concat'
'con' + 'cat';

//Concat is short for Concatenate
//This can also be done with variables that contain strings or numbers

let direction = 'up';

//Output is 'word up'
thisString + ' ' + direction;

//Notice the quotes with a space between the two.  The console doesn't know where to put spaces so they have to be manually placed within the Concatenation otherwise your output will look like this

//Output is 'wordup'
thisString + direction

//Keep in mind however a string is typed within the variable is how the string will be output.  Consider spaces, capitals, characters and everything else that makes a word or a sentence what it is

let greeting = thisString + direction;

//Output is 'wordup'
greeting

//This is an example of a variable of variables that are being concatenated

//If a number is concatenated with a string the console will output everything as a string

greeting = 'hel' + 10;

//Output is 'hel10';
greeting

//Output is string
typeof greeting;

// --- String Methods ---//

//There are things called string methods also

//--- EXAMPLE ---//

//This is a redeclaration of what i have already declared as a clear reminder for what this variable is
direction = 'up';

//Output is 'UP';
direction.toUpperCase();

//In order for this to work there needs to be () after the method

//Output is 'up'
direction

//By using the string method the variable is unchanged.

let drink = '      milk      ';

//Notice all that extra space i created.  That can be removed by using the trim string method

//Output is 'milk'
drink.trim();

//The trim method will only remove the extra space from the beginning and the end of a string

//The string methods can also be strung together... No pun intended

//Output is 'MILK'
drink.trim().toUpperCase();

//If any of these string methods are called without the () it will output some weird code so make sure to keep those () at the end of the method