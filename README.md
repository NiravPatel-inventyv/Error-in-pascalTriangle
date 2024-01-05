# Error in Pascal Triangle
<h3><em>To find all the possible combination of input number, out of those combinations find out prime numbers and then find and highlight those prime numbers which are present in pascal triangle,also find the error ratio in pascal triangle.</em></h3>

## Solution :




### 1. Generate combination 
This code is recursive approch to find all the combinations
<h5>Flow:</h5>


+ Initialization:

    - Converts the input number into a string (numString).
    - Initializes an empty Set combinations to store unique combinations.
+ Permutation Function (permute):

    - Recursively generates permutations of digits.
    - Tracks the current permutation (currentPerm) and explores all possible combinations of digits.
    - Adds valid permutations (within length limits) to the combinations Set.
+ Permutation Generation:

    - Starts the permutation generation process by calling permute with the entire numString.
+ Return:

    - Converts the combinations Set to an array and returns it. This array contains all unique combinations of digits derived from the input number.

```js
 function generateCombinations(number) {
  const numString = number.toString();
  const combinations = new Set();

  function permute(remainingDigits, currentPerm = "") {
    if (currentPerm.length > 0 && currentPerm.length <= numString.length) {
      combinations.add(parseInt(currentPerm));
    }
    if (currentPerm.length === numString.length) {
      combinations.add(parseInt(currentPerm));
      return;
    }

    for (let i = 0; i < remainingDigits.length; i++) {
      const newRemaining =  remainingDigits.slice(0, i) + remainingDigits.slice(i + 1);
      permute(newRemaining, currentPerm + remainingDigits[i]);
    }
  }

  permute(numString);

  return [...combinations];
}
```

### 2. Find Primes from the generated combinations


```js
function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}



let primes = combinations.filter(isPrime);
```



### 3. Generate Pascal triangle
This code genrates pascal triangle till the greatest number in combination.
<h5>Flow:</h5>

+ Initialization:

    - Initializes triangle with the first row [1], representing the starting point of Pascal's Triangle.
    - Sets flag to false to track if any value in the triangle exceeds the given limit.

+ Triangle Construction:

    - Enters a do-while loop to construct subsequent rows of the triangle.
    - Retrieves the lastRow from the triangle to generate the next row (newRow) of the triangle.
+ Row Generation:

    - Each row starts and ends with 1.
    - Calculates values in between using the formula: nextValue = lastRow[i] + lastRow[i - 1].
+ Flag and Limit Check:

    - Checks if any calculated nextValue exceeds the specified limit.
    - If any value in the row surpasses the limit, sets the flag to true and stops further triangle construction.
+ Return:

    - If the flag is set (indicating the limit has been reached), returns the generated portion of the Pascal's Triangle up to that limit.

```js
 function generatePascalTriangle(limit) {
  let triangle = [[1]];
  let flag = false
  do {
    let lastRow = triangle[triangle.length - 1];
    let newRow = [1];
    for (let i = 1; i < lastRow.length; i++) {
      let nextValue = lastRow[i] + lastRow[i - 1];
      newRow.push(nextValue);
      if (nextValue > limit) {
        flag = true
      }
    }
    newRow.push(1);
    triangle.push(newRow);
    if(flag){
      return triangle
    }
  } while (true);
}

```

### 4. Generating Pascal's Triangle with Prime Numbers Highlighted

+ HTML Representation:
    - Constructs the Pascal's Triangle structure using HTML elements, highlighting prime numbers within the triangle.
+ Prime Number Highlighting:
    - Iterates through the Pascal's Triangle, checking and potentially highlighting prime numbers.
+ Identification of Missing Primes:
    - Finds prime numbers from the provided list that are not present within the Pascal's Triangle.
+ Error Ratio Calculation:
    - Calculates the error ratio by determining the percentage of missing prime numbers from the total provided primes.


```js
function generatePascalsTriangleHTML(triangleData) {
  const triangle = triangleData.pascalTriangle;
  const primes = triangleData.primes;
 ;
  const notFoundPrimes = [];

  for (let i = 0; i < triangle.length; i++) {
    const row = triangle[i];
  

    for (let j = 0; j < row.length; j++) {
     
      /*Check if the number is a prime and color it accordingly
      if (primes.includes(row[j])) {
        /* Highlight element */ 
      }

    }
  
  }

  /* Find prime numbers not present in Pascal's Triangle */
  for (let i = 0; i < primes.length; i++) {
    if (!triangle.flat().includes(primes[i])) {
      notFoundPrimes.push(primes[i]);
    }
  }

  /* Display prime numbers not found in Pascal's Triangle */
  if (notFoundPrimes.length > 0) {
    
    /* show prime numbers which are not included in pascal triangle and error ratio */
  }
}

```


## Author : Nirav Patel
