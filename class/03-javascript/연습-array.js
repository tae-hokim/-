const classmate = ["철수","영희","훈이"];
// undefined
console.log(classmate);
// undefined
classmate[0];
// '철수'
classmate[1];
// '영희'
classmate.includes("훈이");
// true
classmate.includes("맹구");
// false
classmate.push("맹구");
// 4
classmate.includes("맹구");
// true
classmate
// (4) ['철수', '영희', '훈이', '맹구']
classmate.pop("맹구");
// '맹구'
classmate
// (3) ['철수', '영희', '훈이']
classmate.length
// 3


const email = "codecamp@gmail.com";
email.split("@");
const front = email[0];
const back = email[1];

const newFront = [];
newFront.push(front[0]);
newFront.push(front[1]);
newFront.push(front[2]);
newFront.push(front[3]);

newFront.push("*","*","*","*")
