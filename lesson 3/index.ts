function sum(...a:number[]):number{
    let result = 0;
    for(let i=0;i<a.length;i++){
        result += a[i];
    }
    return result;
}
console.log(sum(1, 3,5, 6, 7, 8, 3, 2, 6, 8, 0, 1));
