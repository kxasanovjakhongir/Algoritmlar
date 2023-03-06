function string_compression(rawString){
    let count=0
    let compressedstring=""
    for(let i=0;i<rawString.length;i++){
        count++
        const currentLetter=rawString[i];
        if(currentLetter!==rawString[i+1]){
            compressedstring+=currentLetter+count
            count=0
        }
    }
    return compressedstring.length<rawString.length ?compressedstring :rawString
}

let rawString='aaabbgppp'
console.log(`Raw string ${rawString}`);
let compressed=string_compression(rawString)
console.log(`Compression ${compressed}`);
