// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // window.prompt;
  
  var charImput = prompt("How many characters do you want in your password?", "0");
  var charNum = parseInt(charImput)
  if (charNum < 8 || charNum > 128) {
    alert ("Password must be at least 8 characters, and no more than 128")
  }
  
  var lower = confirm ("Do you want lower case letters in the password?");
  var upper = confirm ("Do you want upper case letters in the password?");
  var numeric = confirm ("Do you want numbers in the password?");
  var special = confirm ("Do you want special characters in the password?");

  var password = generatePassword(charNum, lower, upper, numeric, special);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(charNum, lower, upper, numeric, special) {
  const charArray = [];
  if (lower) {
    charArray.push(...`abcdefghijklmnopqrstuvvwxyz`);
  }
  if (upper) {
    charArray.push(...`ABCDEFGHIJKLMNOPQRSTUVWXYZ`);
  }
  if (numeric) {
    charArray.push(...`1234567890`);
  }
  if (special) {
    charArray.push(...`!@#$%^&*()`);
  }

  let current = "";
  for (let i = 0; i < charNum; i++) {
    const randomIndex = Math.floor(Math.random() * charArray.length);
    const randomChar = charArray[randomIndex];
    current = current + randomChar
  }
  return current;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

