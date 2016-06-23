function equation(values) {
    var a = +values[0],
        b = +values[1],
        c = +values[2];

    var d = b * b - 4 * a * c;

    if (a === 0) {
        console.log('x=' + (-c / b))
    }
    else {
        if (d < 0) {
            console.log('no real roots')
        }
        else if (d === 0) {
            console.log('x1=x2=' + (((-b) / (2 * a))).toFixed(2))
        }
        else {
            console.log('x1=' + (((-b - Math.sqrt(d))) / (2 * a)).toFixed(2) + '; x2=' + (((-b + Math.sqrt(d))) / (2 * a)).toFixed(2));
        }
    }
}