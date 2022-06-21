// Assignment Code
var generateBtn = document.querySelector("#generate");

var length;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSymbol;

function generatePassword() {
  console.log("Button has been clicked!");

  // Character arrays

  var Lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var Upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var Number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  var Symbol = ["'", "@", "#", "$", "!", "%", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "`", "{", "|", "}", "~"];

  // Empty array

  var resultArray = [];
  var userArray = [];

  

  // Prompt user for password criteria.
  length = parseInt(prompt("How many characters would you like your passwrod to be? Enter a number between 8 an 128."));


  
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Length must be between 8 and 128!");
    return "Please try again.";
  };
 
    // User selects password criteria
    confirmLower = confirm("Will this contain lowercase letters?");
    confirmUpper = confirm("Will this contain uppercase letters?");
    confirmNumber = confirm("Will this contain numbers?");
    confirmSymbol = confirm("Will this confirm symbols?");
  

   // If user does not select any criteria
   if (!confirmLower && !confirmUpper && !confirmNumber && ! confirmSymbol) {
    choices = alert("You must choose a critera!");
  }

  // Checks which password criteria were selected
  if (confirmLower){
    resultArray = resultArray.concat(Lower);
  }

  if (confirmUpper) {
    resultArray = resultArray.concat(Upper);
  }

  if (Number) {
    resultArray = resultArray.concat(Number);
  }

  if (Symbol) {
    resultArray = resultArray.concat(Symbol);
  }
  console.log(resultArray);

  // For loop evaluates all truthy statements and concats all statements for length of result array  
  for (var i = 0; i < length; i++) {
    userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]);
  }

  // Generate password.
    return userArray.join("");
}


// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);