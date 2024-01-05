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

function generateCombinations(number) {
  const numString = number.toString();
  const combinations = new Set();

  function permute(remainingDigits, currentPerm = "") {
    if (currentPerm.length > 0 && currentPerm.length <= 4 ) {
      combinations.add(parseInt(currentPerm));
    }
    if (currentPerm.length === 4) {
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

export function generatePascalTriangleAndPrimes(inputNumber) {
  let combinations = generateCombinations(inputNumber);
  let primes = combinations.filter(isPrime);
  let sortedArr = combinations.sort((a, b) => a - b); 
  let lastNum = sortedArr[sortedArr.length - 1]; // Last digit from the  array

  let pascalTriangle = generatePascalTriangle(lastNum);

  return {
    pascalTriangle,
    primes,
  };
}
