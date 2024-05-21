function checkOrder  (available, ordered ) {

    if (ordered === 0) {
        console.log(`Your order is empty`)
        return
    }

    if (ordered > available) {
        console.log(`Your order is too large, we don’t have enough goods.`)
        return
    }

    console.log(`Your order is accepted`)
}

checkOrder(10, 0); 
checkOrder(10, 20); 
checkOrder(10, 10);