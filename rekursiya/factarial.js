function start(n){
    if(n==1) return 1
    // else if(n<=1) return 
    else return n*start(n-1)
}
console.log(start(5));