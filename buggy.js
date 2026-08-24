// buggy.js - intentionally buggy JS file for testing purposes

// FIXED: off-by-one error in loop (was `i <= arr.length`, now correctly `i < arr.length`)
function sumArray(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

// Bug 2: using == instead of === causes type coercion issues
function isEqual(a, b) {
  return a == b;
}

// FIXED: classic var-in-loop closure bug (was `var i`, now `let i` so each closure gets its own binding)
function createCounters() {
  var counters = [];
  for (let i = 0; i < 3; i++) {
    counters.push(function () {
      return i;
    });
  }
  return counters;
}

// Bug 4: missing await, function returns a pending Promise instead of the value
async function fetchData(url) {
  const result = fetch(url).then(res => res.json());
  return result;
}

// Bug 5: mutating an array while iterating over it with forEach
function removeEvens(arr) {
  arr.forEach((num, index) => {
    if (num % 2 === 0) {
      arr.splice(index, 1);
    }
  });
  return arr;
}

// Bug 6: no check for division by zero
function divide(a, b) {
  return a / b;
}

// Bug 7: typo referencing an undeclared variable
function greet(name) {
  console.log("Hello, " + nam);
}

module.exports = {
  sumArray,
  isEqual,
  createCounters,
  fetchData,
  removeEvens,
  divide,
  greet
};
