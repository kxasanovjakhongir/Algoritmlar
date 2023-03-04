//Har bir elementni royxatni boshidan tekshirib chiqadi

// -------------------- Linear search ----------------------

// let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

// function linear(arr, num){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==num){
//             return arr[i]
//         }
//     }
// }
// let start=linear(arr,14)
// console.log(start);


// --------------------- Global Linear search ---------------
let arr = [0, 2, 3, 'start', 4, 5, 6, 8, 'salom', 'go', 34, 35, 36, 38, 'go', 39, 23]
function glovallinearsearch(arr, num) {
    let sum = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == num) {
            sum.push(i)
        }
    }
    if (!sum) {
        return -1
    }
    return sum

}
let start = glovallinearsearch(arr, 'go')
console.log(start);