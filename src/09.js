const numArray=[5,7,800,98,105]
console.log(numArray.reduce((element, max) => element > max ? element : max, 0));