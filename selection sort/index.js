let arr = [1, 3, 6, 8, 0, 12, 34, 5, 6, 7, 8, 3, , 12, 13, 14]

function sort1(arr) {
    let n=arr.length
    for (let i = 0; i <n; i++) {
        let min = i
        for (let j = i + 1; j <n; j++) {
            if (arr[j] < arr[min]) {
                min= j
            }
        }

        if (min != i) {
            let sum = arr[i]
            arr[i] = arr[min]
            arr[min] = sum

        }
    }
    return arr
}

let start = sort1(arr)
console.log(start);