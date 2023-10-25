// Problem 1: Write a function to calculate the area of a triangle.

function calculateTriangleArea(base, height) {
  if (base <= 0 || height <= 0) {
    return "Base and height must be positive numbers.";
  }

  const area = (1 / 2) * base * height;
  return area;
}

const base = 5;
const height = 8;
const area = calculateTriangleArea(base, height);

if (typeof area === 'number') {
  console.log(`The area of the triangle is ${area}.`);
} else {
  console.log(area);
}

//Problem 2: Write a function to convert degrees to radians.

function degreesToRadians(degrees) {
  const radians = degrees * (Math.PI / 180);
  return radians;
}

const degrees = 56;
const radians = degreesToRadians(degrees);
console.log(`${degrees} degrees is equal to ${radians} radians.`);

// Problem 3: Create a function calculateFactorial that takes a number and returns its factorial.

function calculateFactorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else if (number < 0) {
    return "Factorial is not defined for negative numbers.";
  } else {
    return number * calculateFactorial(number - 1);
  }
}

const num = 5;
const factorial = calculateFactorial(num);

if (typeof factorial === 'number') {
  console.log(`The factorial of ${num} is ${factorial}.`);
} else {
  console.log(factorial);
}

// Problem 4: Create a function isPrime that takes a number as a parameter and returns true if it's a prime number, and false otherwise.

function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  if (number <= 3) {
    return true;
  }
  
  if (number % 2 === 0 || number % 3 === 0) {
    return false;
  }

  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}

const num = 23;
const isPrimeNum = isPrime(num);

console.log(`Is ${num} prime? ${isPrimeNum ? 'Yes' : 'No'}`);


//Problem 5: Create a function mergeArrays that takes two arrays as parameters and returns a new array that merges both arrays.

function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2);
}
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = mergeArrays(array1, array2);

console.log(mergedArray);



//Problem 6: Create a function isLeapYear that takes a year as a parameter and returns "This is a leap year" if it's a leap year, and "Not Leap year" otherwise.


function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return "This is a leap year";
  } else {
    return "Not a leap year";
  }
}
const year = 2023;
const result = isLeapYear(year);

console.log(`${year} - ${result}`);



//Problem 7: Create a function removeDuplicates that takes an array and returns a new array with duplicates removed.

function removeDuplicates(array) {
  const uniqueArray = [];

  for (let element of array) {
    if (!uniqueArray.includes(element)) {
      uniqueArray.push(element);
    }
  }

  return uniqueArray;
}
const originalArray = [1, 2, 2, 3, 4, 4, 5];
const newArray = removeDuplicates(originalArray);

console.log(newArray);


//Problem 8: Create a function convertToCelsius that takes a temperature in Fahrenheit and returns the equivalent temperature in Celsius.

function convertToCelsius(fahrenheit) {
  const celsius = (fahrenheit - 32) * 5/9;
  return celsius;
}
const fahrenheitTemp = 98;
const celsiusTemp = convertToCelsius(fahrenheitTemp);

console.log(`${fahrenheitTemp}°F is equivalent to ${celsiusTemp}°C.`);



//Problem 9: Write a function to find the maximum of five numbers.
function findMaximumOfFive(a, b, c, d, e) {
  let maximum = a;

  if (b > maximum) {
    maximum = b;
  }

  if (c > maximum) {
    maximum = c;
  }

  if (d > maximum) {
    maximum = d;
  }

  if (e > maximum) {
    maximum = e;
  }

  return maximum;
}
const num1 = 456;
const num2 = 543;
const num3 = 876;
const num4 = 999;
const num5 = 345;

const max = findMaximumOfFive(num1, num2, num3, num4, num5);

console.log(`The maximum of ${num1}, ${num2}, ${num3}, ${num4}, and ${num5} is ${max}.`);

//Problem 10: Create a function called evenOdd() that takes a string as a parameter. Now you have to give the output based on the total number of characters in your String. The output will be 'even' or 'odd'. [ Input: ‘JavaScript’ Output: even, Input: ‘Hello’ Output: odd]
function evenOdd(inputString) {
  const totalCharacters = inputString.length;
  return totalCharacters % 2 === 0 ? 'even' : 'odd';
}

const str1 = 'JavaScript';
const result1 = evenOdd(str1);
console.log(`'${str1}' has an ${result1} number of characters.`); 


const str2 = 'Hello';
const result2 = evenOdd(str2);
console.log(`'${str2}' has an ${result2} number of characters.`); 




