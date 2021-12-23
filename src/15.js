function qm(value) {

    if (typeof (value) === 'string' && value.toString().includes('?')) {
        console.log('true');
        return true;
    } else if (typeof (value) === 'string' && !value.toString().includes('?')) {
        console.log("false");
        return false;
    } else {
        console.error("ვავა!");
        return 'ვავა!';
    }
};

module.exports = { qm }