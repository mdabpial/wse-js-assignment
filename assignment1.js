function calculateTriangleArea(base, height) {
  if (base <= 0 || height <= 0) {
    return "Base and height must be positive numbers.";
  }

  const area = (1 / 2) * base * height;
  return area;
}

// Example usage:
const base = 5;
const height = 8;
const area = calculateTriangleArea(base, height);

if (typeof area === 'number') {
  console.log(`The area of the triangle with base ${base} and height ${height} is ${area}.`);
} else {
  console.log(area);
}
