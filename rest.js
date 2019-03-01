
// Rest parameters allow you take an unspecified amount of parameters to a function
// Rest parameters are preceded by `...`

// We'll start with an example:

function sum(a, b) {
  return a + b
}

console.log(sum(1, 2))

// This is fine, but what if we wanted to sum more than two values?
// In ES5, this would require using the `arguments` parameter

function sumAll() {
  var numbers = Array.prototype.slice.call(arguments),
    result = 0;

  numbers.forEach(function (number) {
    result += number;
  })

  return result;
}

console.log(sumAll(1, 2, 3))

// However, this is less than ideal because there's no way to tell this function
// takes many parameters from the function signature. You have to parse the
// function body to find the arguments parameter.

// In ES6, this changes to the rest operator. So, let's rewrite that sumAll function:

const sumAllWithRestParameters = (...numbers) => {
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}

console.log(sumAllWithRestParameters(1, 2, 3, 4, 5))

// Then we have the spread operator, `...`. This splits an array into single arguments.
// This allows us to build up an array and pass it our sum function without
// manually pulling out the values

const args = [1, 2, 3, 4, 5]
console.log(sumAllWithRestParameters(...args))
