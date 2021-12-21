function qm(value) {
    
    if (typeof(value) === 'string' && value.toString().includes('?')) {
        console.log('true')
    } else if (typeof(value) === 'string' && !value.toString().includes('?')) {
        console.log( "false")
    } else {
        console.error("ვავა!");
    }
}

qm(15)