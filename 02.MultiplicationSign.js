function multiplicationSign (values) {
    var a = +values[0],
        b = +values[1],
        c = +values[2];

    var result = a * b * c;

    if(result > 0){
        console.log("+")
    }

    else if(result === 0){
        console.log("0")
    }

    else {
        console.log("-");
    }
}
