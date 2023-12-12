document.write("<b> Q No 1 Write a program that takes two user inputs for first and last... </b>")
document.write("<br>")
document.write("<br>")
document.write ("Answer show in alert box")
document.write("<br>")
document.write("<br>")

// Prompt user for first name and store it in a variable
var firstName = prompt("Please enter your first name");

// Prompt user for last name and store it in a variable
var lastName =  prompt ("Please enter your last name");

// Marge first and last name 
var fullName = firstName + " " + lastName;

// Show full name in alert box
alert("Hello," + " " + fullName + " " + "! Welcome")

document.write("<b> Q No 2 Write a program to take a user input about his favorite mobile phone model.... </b>")
document.write("<br>")
document.write("<br>")

// Prompt by user favorite mobile 
var favMobile = prompt("Enter your favorite mobile phone");

// Caculate lenght of user input
var lenght = favMobile.length;

// Show lenght
document.write ("The lenght of user input is" + " " +  lenght)
document.write("<br>")
document.write("<br>")


document.write("<b> Q No 3 Write a program to find the index of letter “n” in the word “Pakisani”.... </b>")
document.write("<br>")
document.write("<br>")

// declear var by name pakistani
var pak = "Pakistani"
// Show index number in browser
document.write("Index no of 'n' in word of 'pakistani' is " + " " + pak.indexOf("n"))
document.write("<br>")
document.write("<br>")

document.write("<b> Q No 4 Write a program to find the last index of letter “l” in the word “Hello World”.... </b>")
document.write("<br>")
document.write("<br>")

// declear var by Hello world
var pak1 = "Hello World"
// Show index number in browser
document.write("Last index no of '1' in word of 'Hello World' is " + " " + pak1.lastIndexOf("d"))
document.write("<br>")
document.write("<br>")

document.write(" <b> Q No 5 Write a program to find the character at 3rd index in the word “Pakistani”.... </b>")
document.write("<br>")
document.write("<br>")

// declear var by pakistani
var pak2 = "Pakistani"
 // Display the character at the 3rd index in the browser
document.write("The character at the 3rd index in the word 'Pakistani' is: " + " " + pak2.charAt(3))
document.write("<br>")
document.write("<br>")

document.write(" <b> Q No 6 Repeat Q1 using string concat() method. </b>")
document.write("<br>")
document.write("<br>")
document.write ("Answer show in alert box")

// Prompt user for first name and store it in a variable
var firstName1 = prompt("Please enter your first name");

// Prompt user for last name and store it in a variable
var lastName1 =  prompt ("Please enter your last name");

// Marge first and last name 
var fullName1 = firstName1.concat(lastName1);

// Concatenate the two strings using concat() method
alert("Hello," + " " + fullName1 + " " + "! Welcome")
document.write("<br>")
document.write("<br>")


document.write(" <b> Q No 7 Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad”... </b>")
document.write("<br>")
document.write("<br>")

// Declear var by name Hyderabad
var city = "Hyderabad"

// Replace Hyderabad to islamabad
var city1 = city.replace("Hyder" , "Islam")

// Display in the browser
document.write("'Hyder' is changed to 'islam'" + " " + city1)
document.write("<br>")
document.write("<br>")

document.write(" <b> Q No 8 Write a program to replace all occurrences of “and” in the string with “&”... </b>")
document.write("<br>")
document.write("<br>")

// Declear var by paragrafh
var message = "Ali and Sami are best friends. They play cricket and football together"

// Replace and to &
var message1 = message.replaceAll("and" , "&")

// Display in the browser
document.write(message1)
document.write("<br>")
document.write("<br>")

document.write(" <b> Q No 9 Write a program that converts a string “472” to a number 472.... </b>")
document.write("<br>")
document.write("<br>")

// Declear var by 472
var num = "472"

// convert string to number
var num1 = parseInt(num)
 
// display on the browser
document.write("String value:" + " ",   num  + " ", typeof  num + "<br>"); 
document.write("Number value:" + " ",   num1 + " " ,   typeof  num1);
document.write("<br>")
document.write("<br>")

document.write(" <b> Q No 10 Write a program that takes user input. Convert and show the input in capital letters. </b>")
document.write("<br>")
document.write("<br>")

// Declear prompt for user input
var input = prompt("Enter any word")

// convert to uppercase
var input1 = input.toUpperCase();

// display on the browser
document.write(input1); 
document.write("<br>")
document.write("<br>")


document.write(" <b> Q No 11 Write a program that takes user input. Convert and show the input in title case. </b>")
document.write("<br>")
document.write("<br>")

// Declear prompt for user input
var input2 = prompt("Enter any word")

var input3 = input2.slice(0,1)

// display on the browser
document.write(input3.toUpperCase() + input2.slice(1,))
document.write("<br>")
document.write("<br>")

document.write(" <b> Q No 12 Write a program that converts the variable num to string. </b>")
document.write("<br>")
document.write("<br>")

// declear var by number
 var num4 = 35.36

//  convert number to string
var num5 = num4.toString().replace('.', '');

// // display on the browser
document.write(num5)
document.write("<br>")
document.write("<br>")

document.write(" <b> Q No 13 Write a program to take user input and store username in a variable... </b>")
document.write("<br>")
document.write("<br>")

// Function to check if the username contains any special symbols
function checkUsername(username) {
    var specialSymbols = ['@', '.', ',', '!','$','#','%','&','*'];

    for (var i = 0; i < username.length; i++) {
        if (specialSymbols.includes(username[i])) {
            return true;
        }
    }
    return false;
}

// Taking user input for username
var userInput = prompt("Enter your username:");

// Checking if the username contains any special symbols
if (checkUsername(userInput)) {
    document.write("Please enter a valid username without special symbols like @, ., , or !");
} else {
    document.write("Username is valid: " + userInput);
}
document.write("<br>")
document.write("<br>")

  
document.write(" <b> Q No 14 Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.... </b>")
document.write("<br>")
document.write("<br>")

// Array of items
var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// Function to perform case-insensitive search in the array
function searchItem(item) {
    for (var i = 0; i < A.length; i++) {
        if (A[i].toLowerCase() === item.toLowerCase()) {
            return true;
        }
    }
    return false;
}

// User input for searching an item
var userInput = prompt("Enter an item to search:").toLowerCase();

// Checking if the item exists in the array
if (searchItem(userInput)) {
    document.write("Yes, '" + userInput + "' is available in my bakery.");
} else {
    document.write("No, '" + userInput + "' is not available in my bakery.");
}
document.write("<br>")
document.write("<br>")


document.write(" <b> Q No 15 Write a program to take password as an input from user..... </b>")
document.write("<br>")
document.write("<br>")

// Function to check if the password meets the requirements
function checkPassword(password) {
    // Check if password contains alphabets and numbers
    var hasAlphabet = false;
    var hasNumber = false;
    
    for (var i = 0; i < password.length; i++) {
        var charCode = password.charCodeAt(i);
        
        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
            hasAlphabet = true;
        } else if (charCode >= 48 && charCode <= 57) {
            hasNumber = true;
        }
    }
    
    // Check the password conditions
    if (password.length < 6 || password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57 || !hasAlphabet || !hasNumber) {
        return false;
    } else {
        return true;
    }
}

// Taking user input for password
var userPassword = prompt("Enter a password:");

// Checking if the password meets the requirements
if (!checkPassword(userPassword)) {
    document.write("Please enter a valid password that contains alphabets and numbers, is at least 6 characters long, and doesn't start with a number.");
} else {
    document.write("Password is valid." + " " + userPassword);
}
document.write("<br>")
document.write("<br>")

document.write(" <b> Q No 16 Write a program to convert the following string to an array using string split method... </b>")
document.write("<br>")
document.write("<br>")

var university = "University of Karachi";

// Splitting the string into an array based on spaces
var universityArray = university.split('');

// Displaying the elements of the array in the browser
document.write("<p>Array elements:</p>");
document.write("<ul>");
for (var i = 0; i < universityArray.length; i++) {
    document.write("<li>" + universityArray[i] + "</li>");
}
document.write("</ul>");
document.write("<br>")
document.write("<br>")


document.write(" <b> Q No 17 Write a program to display the last character of a user input.... </b>")
document.write("<br>")
document.write("<br>")

// Taking user input
var userInput = prompt("Enter a string:");

// Checking if the user input is not empty
if (userInput !== null && userInput !== '') {
    // Finding and displaying the last character of the input
    var lastCharacter = userInput.charAt(userInput.length - 1);
    document.write("The last character of the input is: " + lastCharacter);
} else {
    document.write("Invalid input. Please enter a valid string.");
}
document.write("<br>")
document.write("<br>")

document.write(" <b> Q No 18 You have a string “The quick brown fox jumps over the lazy dog”... </b>")
document.write("<br>")
document.write("<br>")

var sentence = "The quick brown fox jumps over the lazy dog";
var wordToFind = "the";
var count = 0;

// Convert both sentence and wordToFind to lowercase for case-insensitive comparison
var lowerCaseSentence = sentence.toLowerCase();
var lowerCaseWordToFind = wordToFind.toLowerCase();

// Split the sentence into words
var wordsArray = lowerCaseSentence.split(' ');

// Loop through each word and count occurrences of the wordToFind
for (var i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i] === lowerCaseWordToFind) {
        count++;
    }
}

// Display the count of occurrences of the wordToFind
document.write("The word '" + wordToFind + "' occurs " + count + " times in the given string.");
document.write("<br>")
document.write("<br>")