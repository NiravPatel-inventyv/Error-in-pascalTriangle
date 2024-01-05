// Import the function from the modularized file
import { generatePascalTriangleAndPrimes } from "./Error_In_PascalTriangle.mjs";

// Function to generate Pascal's Triangle in HTML div elements and highlight primes
function generatePascalsTriangleHTML(triangleData) {
  const triangle = triangleData.pascalTriangle;
  const primes = triangleData.primes;
  const Cont = document.getElementById('cont');
  const errorbox = document.getElementById('error-box');
  const container = document.createElement('div');
  container.style.textAlign = 'center';
  const notFoundPrimes = [];

  for (let i = 0; i < triangle.length; i++) {
    const row = triangle[i];
    const rowDiv = document.createElement('div');
    rowDiv.style.display = 'flex';
    rowDiv.style.justifyContent = 'center';

    for (let j = 0; j < row.length; j++) {
      const numberSpan = document.createElement('span');
      numberSpan.style.padding = '10px';

      // Check if the number is a prime and color it accordingly
      if (primes.includes(row[j])) {
        numberSpan.style.color = 'black';
        numberSpan.style.textDecoration = 'underline';
        numberSpan.style.backgroundColor = 'yellow';
        numberSpan.style.borderRadius = '50%'
      }

      numberSpan.textContent = row[j];
      rowDiv.appendChild(numberSpan);
    }
    container.appendChild(rowDiv);
  }
  Cont.appendChild(container)

  // Find prime numbers not present in Pascal's Triangle
  for (let i = 0; i < primes.length; i++) {
    if (!triangle.flat().includes(primes[i])) {
      notFoundPrimes.push(primes[i]);
    }
  }

  // Display prime numbers not found in Pascal's Triangle
  if (notFoundPrimes.length > 0) {
    const errorDiv = document.createElement('div');
    const errorRatio = document.createElement('div');
    errorDiv.textContent = `
Prime numbers not found in Pascal's Triangle: ${notFoundPrimes.join(', ')}`;
    errorDiv.style.marginTop = '20px';
    errorDiv.style.textAlign = 'center'; 
     errorRatio.textContent = `
Error Ratio in pascals triangle is : ${((notFoundPrimes.length / primes.length)*100).toFixed(2)} %`;
    errorRatio.style.marginTop = '20px';
    errorRatio.style.textAlign = 'center';
    errorbox.appendChild(errorDiv)
    errorbox.appendChild(errorRatio)
  }
}

const btn = document.getElementById("show")

btn.addEventListener('click', () => {
  const inputNumber = document.getElementById("num").value;
  const result = generatePascalTriangleAndPrimes(inputNumber);
  
  if(inputNumber.length > 4 ) {
    alert("Enter number less tha or equal to 4 digits only")
   
}else{

  // Clear existing content in the container
  const container = document.getElementById('cont');
  container.innerHTML = ''; 
  
  const errorbox = document.getElementById('error-box');
  errorbox.innerHTML = ''; 
  // Generate Pascal's Triangle in HTML div elements and highlight primes
  generatePascalsTriangleHTML(result);
}
  
});
