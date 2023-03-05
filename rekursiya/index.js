function start(n){
    console.log(n);
    if(n<=1) return
    else start(n-1)
}
start(10 )