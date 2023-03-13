function fibanachi(n){
    if(n<2) return n;
    return fibanachi(n-1)+fibanachi(n-2)
}

let start=fibanachi(10);
console.log(start);
