const text = "JavaScript is the programming language of HTML and the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced."

let words = text.split(" ");
        let wordsCount = words.reduce(function (acc, w) {
            if (acc[w]) {
                acc[w] += 1
            } else {
                acc[w] = 1;
            }

            return acc;
        }, {});

        for (let w in wordsCount) {
            console.log(w + ' : ' + wordsCount[w]);
        }                
