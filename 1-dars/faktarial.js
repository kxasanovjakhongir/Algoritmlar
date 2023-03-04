// N faktarialni  hisoblash 
// N =5  1*2*3*4*5=120



function factarial(n){
    let sum=1
    for(let i=1;i<=n;i++){
        sum=sum*i
    }
    return sum
}

console.log(factarial(5));