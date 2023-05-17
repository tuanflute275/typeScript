function sum() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var result = 0;
    for (var i = 0; i < a.length; i++) {
        result += a[i];
    }
    return result;
}
console.log(sum(1, 3, 5, 6, 7, 8, 3, 2, 6, 8, 0, 1));
