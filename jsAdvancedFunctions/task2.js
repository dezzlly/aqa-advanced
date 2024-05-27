function checkNumber(num) {
    if (num > 0) {
        console.log(num)
        checkNumber(num - 1);
    }
}

checkNumber(5);