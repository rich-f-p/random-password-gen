// Assignment Code
var generateBtn = document.querySelector("#generate");
/* arrays */
var upperletters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerletters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var ranNum = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!","@","#","$","%","^","&","*","+","_","=","-",";"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  /* promt user for length of password */
  var passlength = window.prompt("length of the password\n(8-128)");
/* confirm the use of lowercase letters */
  var lower = window.confirm("would you like lowercase letters?")
/* confirm the use of uppercase letters */
  var upper = window.confirm("would you like upper case letter?")
/* confirm the use of symbols */
  var symbol = window.confirm("would you like a special symbol?")
/* confirm the use of numbers */
  var num = window.confirm("would you like numbers?")
 

};