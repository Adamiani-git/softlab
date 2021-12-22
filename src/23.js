let count = 1;
    const interval = setInterval(() => {
            console.log(new Date());
            if (count === 10) {
                clearInterval(interval)
            }
            count++
       
    }, 5000);               