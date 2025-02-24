let a=3
let b=a
b=4
console.log(a)
console.log(b);
// primitive ==stack and stack m copy jaati h above example 
let user1={
    rollno: "221b242"
}
let user2=user1
user2.rollno="221b240"
console.log(user1.rollno)
console.log(user2.rollno)
// above example of heap non primitive in which reference is taken means original value