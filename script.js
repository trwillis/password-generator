// var vs let or const

var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["+", "-", "&", "|","!", "(", ")", "{", "}", "[", "]", "^",
"~", "*", "?", ":"];
var passwordLength = 12;
var password ="";
// Need a function to prompt user for the password inputs
// 
function generatePassword(){
  
}
function myPasswordOptions(){
  window.alert("CLICK the red Generate Password button")
}

// we have prompt/ modal =  prompt, alert, and a confirm
var password=document.getElementById ("password");


// prompt = a question, needs an input, alert =  does not need an input from a client, confirm = a yes or no/true or false/ boolean


// conditionals for length
//if (length > 128) {
//alert('Password length must less than 129 characters');
// return null;
// }
// if (length < 8) {
// alert('Password length must be greater than 8 characters');
// return null;
// }
// questions about whether or not the user wants all the criteria ... in the form of confirms 


  // another function that's a random generator
//function generatePassword()[

var generate=document.getElementById("generate").addEventListener("click", e=> {
 });





//   for(int i = 0; i < total; i++);
// console.log("total");
//   for(int j = 0; j < length; j++);
// console.log("length");

  var generate=document.getElementById("generate").addEventListener("click", e=> {
 
  });

  
  // another function that actually puts together the password

//function to copy password
function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.select();
  copyText.setSelectionRange(0, 999);
  document.execCommand("copy");
  }

generatePassword();
myPasswordOptions();



// //DOM elements
// const passwordEl = document.getElementById('password');
// const uppercaseEl = document.getElementById('uppercase');
// const lowercaseEl = document.getElementById('lowercase');
// const numbersEl = document.getElementById('numbers');
// const symbolsEl = document.getElementById('symbols');
// const generateEl = document.getElementById('generate');
// //const clipboardEl = document.getElementById('clipboard');
// const upperEl = document.getElementById('upper');
// const lowerEl = document.getElementById('lower');
// const numbersEl = document.getElementById('numbers');
// const specialEl = document.getElementById('special');
// const generateEl = document.getElementById('generate');
// const passwordEl = document.getElementById('password')

// const randomFunc = {
//   lower: getRandomLower,
//   upper: getRandomUpper,
//   number: getRandomNumber,
//   symbol: getRandomSymbol,
// };

// //generate event listener
// passwordEl.addEventListener('click', () => {});

// //const hasLower = lowercaseEl.value;
// //const hasUpper = uppercaseEl.value;
// //const hasNumber = numbersEl.value;
// //const hasSymbol = symbolsEl.value;
// function generatePassword(){
//   var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*:;?/\<>";
//   var passwordLength = 12;
//   var password ="";


// //passwordEl.innerText = generatedPassword (hasLower, hasUpper, hasNumber, hasSymbol); 



// //generate password function

// let generatedPassword = "password";
// //generatedPassword (hasLower,hasUpper,hasNumber,hasSymbol);



// // Generator Functions - http://www.net-comber.com/charset.html

// function getRandomLower() {
//   const lower = "abcdefghijklmnopqrstuvwxyz";
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }

// function getRandomUpper() {
//   const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }

// function getRandomNumber() {
//   const number = "0123456789";

//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }
// function getRandomSymbol() {
//   const symbols = "!@#$%^&*:;?/\<>";
//   return symbols[Math.floor(Math.random() * symbols.length)];
// }

// console.log(getRandomSymbol());
// console.log(getRandomNumber());
// console.log(getRandomUpper());
// console.log(getRandomLower());


// function getPasswordOptions() {
//   // Variable to store length of password from user input
//   var length = parseInt(
//     prompt('How many characters would you like your password to contain?')
//   );
//   // Conditional statement to check if password length is a number. Prompts end if this evaluates false
//   if (Number.isNaN(length)) {
//     alert('Password length must be provided as a number');
//     return null;
//   }
//   // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
//   if (length < 8) {
//     alert('Password length must be at least 8 characters');
//     return null;
//   }
//   // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
//   if (length > 128) {
//     alert('Password length must less than 129 characters');
//     return null;
//   }
//   // Variable to store boolean regarding the inclusion of special characters
//   var hasSpecialCharacters = confirm(
//     'Click OK to confirm including special characters.'
//   );
//   // Variable to store boolean regarding the inclusion of numeric characters
//   // Variable to store boolean regarding the inclusion of lowercase characters
//   // Variable to store boolean regarding the inclusion of uppercase characters
//   // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
//   // Object to store user input then return that object
// }