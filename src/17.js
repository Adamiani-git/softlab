function palindrome(value) {
    let count = 0
    for (let i = 0; i < value.length / 2; i++) {
        if (value[i] === value[value.length - 1 - i]) {
            count++
        }
    };

    if (count === Math.round(value.length / 2)) {
        console.log(true);
        return true
    } else {
        console.log('არა')
        return 'არა'
    }

}

module.exports = { palindrome } 