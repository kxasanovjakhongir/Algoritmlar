// x,y,z ning eng kattasini toping ?
// shart operatorlaridan foydalaniladi
// start function 
// agar a>b , a>c  demak eng kattasi a
// agar a<b , b>c demak eng kattasi b
// aks holda c eng katta 


function start(a,b,c){
    if(a>b && a>c){
        return a
    }else if(a<b && b>c){
        return b
    }else return c
}

let stop=start(5,2,3)
console.log(stop);