// Sum of Two Numbers
function sum(a, b) {
  // Add your code here
  if (typeof a !== 'number' || typeof b !== 'number') {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  return a + b;
}

// Factorial of a Number
function factorial(n) {
  // Add your code here
  if (n < 1 || typeof n !== 'number') {
    console.log("Los datos de entrada no son adecuados");
    return 1;
  }
  if (n === 1) {
      console.log(`El factorial de 1 es igual a 1.`);
      return 1;
  }
  const result = n * factorial(n - 1);
  console.log(`El factorial de ${n} es igual a ${result}.`);
  return result;
}

// Find the Largest Number
function findLargest(arr) {
  // Add your code here
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
        return "Los datos de entrada no son adecuados";
    }
  }
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
          largest = arr[i];
      }
  }
  return largest;
}

// Count Vowels in a String
function countVowels(str) {
  // Add your code here
  if (typeof str !== 'string') {
    return "Los datos de entrada no son adecuados";
  }
  const vowels = 'aeiouAEIOU';
  let count = 0;
  for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str.charAt(i))) {
          count++;
      }
  }
  return count;
}

// Check if a Number is Prime
function isPrime(n) {
  // Add your code here
  if (n < 1 || typeof n !== 'number') {
    console.log("Los datos de entrada no son adecuados");
    return false;
  }
  for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
      if (n % i === 0) {
          console.log(`${n} no es un número primo.`);
          return false;
      }
  }
  console.log(`${n} es un número primo.`);
  return true;
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
