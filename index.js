function isPalindrome(word) {
  // Write your algorithm here
for(let i = 0; i < word.length/2; i++) {
  const j = word.length - 1 - i
  const startChar = word[i]
  const endChar = word[j]
  if(startChar !== endChar) return false
}
return true
}

// r a c e c a r
// 0 1 2 3 4 5 6

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
