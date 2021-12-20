const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
numbers.filter(n => n % 2 != 0).forEach(n => console.log(n * n));