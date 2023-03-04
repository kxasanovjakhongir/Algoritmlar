let alif=['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m']
let num=[1,3,5,7,9,12,23,34,45,56,67,78,89,]
function binary(num,target){
    let end=num.length-1
    let start=0
    if(start>end){
        return -1
    }
    while(start<=end){
        let middle=Math.floor((start+end)/2)

        if(num[middle]==target) return middle
        else if(num[middle]<target){
            start=middle+1
        }else{
            end=middle-1
        }
    }
    return -1
}
let go=binary(num,56)
console.log(go);