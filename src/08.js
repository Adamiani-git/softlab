function maxNum(num1, num2) {
    if (!num1 || !num2) {
        console.error('ვავა!');
        return 'ვავა!';
    } else if (num1 > num2) {
        console.log(num1);
        return num1;
    } else if (num2 > num1) {
        console.log(num2);
        return num2;
    } else {
        console.log('ტოლია');
        return 'ტოლია'
    }
}


module.exports = { maxNum }