const generateBtn = document.querySelector("#generate");

// Array of lowercase characters to be included in password
const LowercasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of numeric characters to be included in password
const NumericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of special characters to be included in password
const SpecialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of uppercase characters to be included in password
const UppercasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function generatePassword() {
  passwordLength = prompt("Choose between 8 and 128 characters") 
    if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Password length must be between 8 and 128 characters")
      return
    }
    // Determine parameters of the password
    const userWantsLowercasedCharacters = window.confirm("Do you want to add lowercase letters to your password?")
    const userWantsNumbericCharacters = window.confirm("Do you want to add uppercase letters to your password?")
    const userWantsSpecialCharacters = window.confirm("Do you want to add numbers to your password?")
    const userWantsUppercasedCharacters = window.confirm("Do you want to add symbols to your password?")

    if (userWantsLowercasedCharacters === false && userWantsNumbericCharacters === false && userWantsSpecialCharacters  === false && userWantsUppercasedCharacters === false) {
      window.alert("You must choose at least one parameter!");
      return
    }

    
}

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
