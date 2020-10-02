
exports.min =  function min(array) {
    if ( arguments.length === 0 || array.length === 0 ) {
        return 0;
    }

    let minv = array[0]

    for (let key of array) {
        if(key < minv) minv = key;
    }

    return minv;
 }

exports.max = function max(array) {
    if ( arguments.length === 0 || array.length === 0 ) {
        return 0;
    }

    let maxv = array[0]

    for (let key of array) {
        if(key > maxv) maxv = key;
    }

    return maxv;
}

exports.avg = function avg(array) {
    if ( arguments.length === 0 || array.length === 0 ) {
        return 0;
    }

    let sum = 0

    for (let key of array) {
        sum += key;
    }

    return sum / array.length;
}
