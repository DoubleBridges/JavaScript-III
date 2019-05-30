function testFunc() {
    let val1 = 100;
    let val2 = 100;
    let winner = `val1`;
    let randNum = function() {
        return Math.floor((Math.random() * 10) + 1)
    };

    while (val1 > 0 && val2 > 0) {
        val1 -= randNum();
        console.log(val1);
        val2 -= randNum();
        console.log(val2);
    }

    if (val2 > val1) {
        winner = `val2`;
    }

    console.log(`The winner is ${winner}.`);
}

testFunc();