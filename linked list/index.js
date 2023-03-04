// Linked List methods ==>  
// 1. size()
// 2. clear()
// 3. getLast()
// 4. getFirst()

// 1.  size()

// size() {
//     let count = 0; 
//     let node = this.head;
//     while (node) {
//         count++;
//         node = node.next
//     }
//     return count;
// }


// 2. clear()

// clear() {
//     this.head = null;
// }


// 3. getLast()

// getLast() {
//     let lastNode = this.head;
//     if (lastNode) {
//         while (lastNode.next) {
//             lastNode = lastNode.next
//         }
//     }
//     return lastNode
// }


// 4. getFirst()

// getFirst() {
//     return this.head;
// }




// const list={
//     head:{
//         value:1,
//         next:{
//             value:10,
//             next:{
//                 value:100,
//                 next:{
//                     value:1000,
//                     next:{
//                         value:123
//                     }
//                 }
//             }
//         }
//     }
// }
// console.log(list);


// class ListNode{
//     constructor(data){
//         this.data=data,
//         this.next=null
//     }
// }
// let node1=new ListNode(5)
// console.log(node1);

