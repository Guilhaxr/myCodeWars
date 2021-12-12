// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay),
//  or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

// Example 1:

// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
// Example 2:

// Input: n = 2
// Output: false

const isHappy = (n) => {
    let result = n;
    let resultChecker = [];
    let resultMeetInChecker = 0
    while (result >= 1) {
      let newArr = result.toString().split("").map(Number);
      result = 0;
      for (let i = 0; i < newArr.length; i++) {
        result += newArr[i] ** 2;
      }
      if (result === 1) {
        return true;
      }
      resultChecker.forEach((curr) => result === curr ?  resultMeetInChecker++ : console.log('same'));
      if (resultMeetInChecker > 3 ) {
        return false;
      }
      // console.log(resultChecker)
      resultChecker.push(result);
      console.log(resultChecker)
      resultMeetInChecker = 0
    }
  };
  