# 03 JavaScript: Password Generator

## Development Proccess

In the function writePassword (line 5) I wrote the code:

* var charImput = prompt("How many characters do you want in your password?", "0");
  var charNum = parseInt(charImput)
  if (charNum < 8 || charNum > 128) {
    alert ("Password must be at least 8 characters, and no more than 128")
  }

This causes a prompt to pop up after the generate button is clicked, asking the user how many characters they want in their password, so long as it hhas more than 8 characters and less than 128 characters. If the password asked for is shorter than 8 and longer than 128 characters then the user is shown a prompt showing that the password is too long or short.

Lower in the function I wrote vaarious variables that support confirmation prompts that return a boolian variable, each asking if the user waants lowercase letters, uppercase letters, numbers, or speciaal characters in their password

* var lower = confirm ("Do you want lower case letters in the password?");
  var upper = confirm ("Do you want upper case letters in the password?");
  var numeric = confirm ("Do you want numbers in the password?");
  var special = confirm ("Do you want special characters in the password?");

The function then runs the variable "password" which is tied to the secondary function "generatePassword"

* function generatePassword(charNum, lower, upper, numeric, special) {
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

This function determines whether each answer the user gives for each of the variables are true or false. If true, then the return pushes all true answers and blocks the false.

Lastly the password is set with the variable "current" which is marked as blank until this is run;

* let current = "";
  for (let i = 0; i < charNum; i++) {
    const randomIndex = Math.floor(Math.random() * charArray.length);
    const randomChar = charArray[randomIndex];
    current = current + randomChar
  }
  return current;

this generates the random password using all the stored information in both functions.
