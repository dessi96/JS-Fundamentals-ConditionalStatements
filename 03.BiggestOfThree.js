function getBiggest (values) {
    var a = +values[0],
        b = +values[1],
        c = +values[2];

    if (a >= b && a >= c) {
        console.log(a)
    }
    else if (b >= a && b >= c) {
        console.log(b)
    }
    else if (c >= a && c >= b) {
        console.log(c)
    }
}

