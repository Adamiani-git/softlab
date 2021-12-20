function martivi(num) {   

c:
    for (let i = 2; i <= num; i++) {

        for (let y = 2; y < i; y++) {
            if (i % y === 0) {
                continue c;
            }

        }
        console.log(i);
    }
}

martivi(23)