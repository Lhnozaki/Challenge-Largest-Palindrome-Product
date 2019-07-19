/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function(digits) {
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;

  // do your work here

  let array = [];

  let findPalindromeNumber = function(num1, num2) {
    for (i = num1; i <= num2; i++) {
      for (j = num1; j <= num2; j++) {
        let product = i * j;
        let rev = parseInt(
          product
            .toString()
            .split("")
            .reverse()
            .join("")
        );
        if (product === rev) {
          array.push(product);
          factor_0 = i;
          factor_1 = j;
        }
      }
      palindromeNumber = Math.max(...array);
    }
  };

  if (digits === 2) {
    findPalindromeNumber(10, 99);
  }

  if (digits === 3) {
    findPalindromeNumber(100, 999);
  }

  return {
    factor_0: factor_0,
    factor_1: factor_1,
    palindromeNumber: palindromeNumber
  };
};
