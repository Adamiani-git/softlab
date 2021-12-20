function reverse(num) {
    console.log( parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num))
}

reverse(1230)