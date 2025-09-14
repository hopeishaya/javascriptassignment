// 1. Sum of numbers from 1 to destination
export function sumOfNumbersTo(destination) {
  if (typeof destination !== "number" || destination < 1) {
    throw new Error(
      "Invalid input: destination must be a positive number starting from 1!"
    );
  }
  return (destination * (destination + 1)) / 2;
}

// 2. Even numbers within destination
export function evenNumbersWithin(destination) {
  let arrayOfEvenNumbers = [];
  for (let i = 0; i <= destination; i++) {
    if (i % 2 === 0) arrayOfEvenNumbers.push(i);
  }
  return {
    count: arrayOfEvenNumbers.length,
    sum: arrayOfEvenNumbers.reduce((a, b) => a + b, 0),
    arrayOfEvenNumbers,
  };
}

// 3. Celsius to Fahrenheit conversion
export function celsiusToFahrenheit(celsiusArray) {
  return celsiusArray.map((c) => Math.trunc((c * 9) / 5 + 32));
}

// 4. Odd numbers within destination
export function oddNumbersWithin(destination) {
  let arrayOfOddNumbers = [];
  for (let i = 0; i <= destination; i++) {
    if (i % 2 !== 0) arrayOfOddNumbers.push(i);
  }
  return {
    count: arrayOfOddNumbers.length,
    sum: arrayOfOddNumbers.reduce((a, b) => a + b, 0),
    arrayOfOddNumbers,
  };
}

// 5. Find multiples of a factor in an array
export function findMultiples(numbers, factor) {
  let multiples = numbers.filter((num) => num % factor === 0);
  return {
    count: multiples.length,
    sum: multiples.reduce((a, b) => a + b, 0),
    multiples,
  };
}

// 6. Calculate factorials for an array of numbers
export function calculateFactorials(numbers) {
  return numbers.map((num) => {
    if (num < 0) return 0;
    if (num === 0) return 1;
    let factorial = 1;
    for (let i = 1; i <= num; i++) factorial *= i;
    return factorial;
  });
}

// 7. Find prime numbers in an array
export function findPrimeNumbers(numbers) {
  function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
  let primes = numbers.filter(isPrime);
  return {
    count: primes.length,
    sum: primes.reduce((a, b) => a + b, 0),
    primes,
  };
}

// 8. Double the values in an array
export function doubleTheValues(numbers) {
  return numbers.map((num) => num * 2);
}
