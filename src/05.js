const numbers = [-2, 0, 6, 3, -11, 4, -5, 10, 11, -1, 7, 9];

console.log(numbers
    .filter(n => n >= 0)
    .reduce((acc, n) => acc + n, 0)
    );