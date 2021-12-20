function qm(value) {
    
    if (isNaN(value) && value.toString().includes('?')) {
        console.log('true')
    } else if (isNaN(value) && !value.toString().includes('?')) {
        console.log( "false")
    } else {
        console.error("ვავა!");
    }
}

qm('a?')