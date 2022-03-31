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

/* check for password criteria */
if(lower===false && symbol===false && upper===false && num===false) {
  alert("please try again no set criteria");
  };
/* check that length of password meets criteria */
if(passlength<8 || passlength>128 || !passlength) {
  alert("please try again password length 8-128");
  };
 
/* generate random character from array */
function randomchar(a){
  var i = Math.floor(Math.random()*a.length);
  return a[i];
}/* putting random characters into single array */
var pass = [];
for (var i = 0; i < passlength;) {
/* picking lowercase letter from array */
if (lower ===true && i<passlength){
var a=lowerletters;
var newArr = randomchar(a);
  pass.push(newArr);
  i++;
}
/* picking uppercase letter from array */
if(upper===true){
var a=upperletters;
var newArr = randomchar(a);
  pass.push(newArr);
  i++;
}
/* picking symbol from array */
if(symbol===true){
  var a=special;
  var newArr = randomchar(a);
    pass.push(newArr);
    i++
  }
/* picking number from array */
  if(num ===true){
  var a = ranNum;
  var newArr = randomchar(a);
    pass.push(newArr);
    i++
  }
}

};