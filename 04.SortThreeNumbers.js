function sortNumbers (values) {
    var a = +values[0],
      b = +values[1],
      c = +values[2];

    if (a < b) {
        if (b < c) {
            console.log(c + ' ' + b + ' ' + a)
        }
        else {
            if (a < c) {
                console.log(b + ' ' + c + ' ' + a)
            }
            else {
                console.log( b + ' ' + a + ' ' + c)
            }
        }
    }
    else {
        if (b > c) {
            console.log( a + ' ' + b + ' ' + c)
        }
        else {
            if (a > c) {
                console.log(a + ' ' + c + ' ' + b)
            }
            else {
                 console.log(c + ' ' + a + ' ' + b)
            }
        }
    }
}