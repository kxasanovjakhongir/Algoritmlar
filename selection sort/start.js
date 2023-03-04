let arr=[1,4,7,8,9,5,4,2,1,7]

function start(arr){
    let n=arr.length
    for(let i=0;i<n;i++){
        let min =i

        for(let j=i+1;j<n;j++){
            if(arr[j]<arr[min]){
                min=j
            }
        }
        if(min!=i){
            let sum=arr[i]
            arr[i]=arr[min]
            arr[min]=sum
        }
    }return arr
}
let stop=start(arr)
console.log(stop);