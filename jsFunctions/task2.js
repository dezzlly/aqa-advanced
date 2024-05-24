const checkPersonAge = function (age) {

    if (age >= 18) {
        return true
    }

    return false
}

console.log(`Is person adult - ${checkPersonAge(25)}`)
console.log(`Is person adult - ${checkPersonAge(15)}`)