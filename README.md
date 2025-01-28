# MongoDB $in Operator with String Issue

This repository demonstrates a common error when using the `$in` operator in MongoDB queries. The `$in` operator requires an array as its value; using a string leads to unexpected behavior and incorrect results.

## Bug Description

The provided JavaScript code attempts to find a user with the name 'John Doe' using the `$in` operator with a string argument. This results in an empty result set.

## Solution

The correct approach is to pass an array to the `$in` operator. The solution shows the correct implementation that accurately finds the desired user.

## How to Reproduce

1. Clone this repository.
2. Make sure you have Node.js and a MongoDB instance running.
3. Run `node bug.js`. Observe that it returns an empty array.
4. Run `node bugSolution.js`. Observe that it correctly finds the user.
