function palindrom(value) {
    let count = 0
                        for (let i = 0; i < value.length / 2; i++) {
                            if (value[i] === value[value.length - 1 - i]) {
                                count++
                            } 
                        };

                        if (count === Math.round(value.length / 2)) {
                            console.log(true);
                        }else{
                            console.log('არა')
                        }
    
}

palindrom('abba')