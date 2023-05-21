function isPalindrome(word) {
  // Write your algorithm here
  for (let i=0; i<word.length; i++) {
    let lettersForward = word[i]
    let lettersBackward = word[word.length-(i+1)]
    if ((lettersForward !== lettersBackward)) {
      return false
    }
  } return true
}

/* 
  Add your pseudocode here

  create function called isPalindrome that takes one argument
  if (argument is a palidrome) is true, return true
  else, return false

  to check if arguement is a palindrome
    loop forward starting with first letter
    and 
    loop backwards starting with last letter
    compare letters.
    if they do not match... break and return false

    add some examples to test:
    - dad
    - poppop
    - beehive

*/


/*
  Add written explanation of your solution here


*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

  console.log("Expecting: false");
  console.log("=>", isPalindrome("beehive"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("poppop"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("dad"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
