const mathOperations = {
  sum: function (a, b) {        // Sum Method which will return a + b
    return a + b;
  },
  diff: function (a, b) {       // diff Method which will return a - b
    return a - b;
  },
  product: function (a, b) {    // product Method which will return a * b
    return a * b;
  },
}
module.exports = mathOperations  


/* OUTPUT : 
  PASS ./mathoperation.test.js
  adds 1 + 4 to equal 5 (3 ms)
  diff 4 - 2 return 2 (1 ms)
  multiply 2 * 3 require 6 (1 ms)

  Test Suites : 1 Passed, 1 total
  Tests :       3 passed, 3 total
  Snapshots :   0 total
  Time :        0.557 s
  Ran all test suites.
*/