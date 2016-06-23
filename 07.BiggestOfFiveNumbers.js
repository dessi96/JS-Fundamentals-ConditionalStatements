function getBiggest (values) {
    var a = +values[0],
        b = +values[1],
        c = +values[2]
        d = +values[3],
        e = +values[4];

    if (a >= b && a >= c && a >= d && a >= e) {
        console.log(a)
    }
    else if (b >= a && b >= c && b >= d && b >= e) {
        console.log(b)
    }
    else if (c >= b && c >= a && c >= d && c >= e) {
        console.log(c)
    }
    else if (d >= b && d >= a && d >= c && d >= e) {
        console.log(d)
    }
    else if (e >= b && e >= a && e >= d && e >= c) {
        console.log(e)
    }
}
