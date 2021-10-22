const profile = {};
// undefined
profile
// {}
const profile2 = {
    name : "철수",
    age : 8,
    school : "다람쥐초등학교"
}
// undefined
profile2
// {name: '철수', age: 8, school: '다람쥐초등학교'}age: 8name: "철수"school: "다람쥐초등학교"[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
profile2.school
// '다람쥐초등학교'
profile2.name
// '철수'










const fruits = [
    { number: 1, title: "레드향" },
    { number: 2, title: "샤인머스켓" },
    { number: 3, title: "산청딸기" },
    { number: 4, title: "한라봉" },
    { number: 5, title: "사과" },
    { number: 6, title: "애플망고" },
    { number: 7, title: "딸기" },
    { number: 8, title: "천혜향" },
    { number: 9, title: "과일선물세트" },
    { number: 10, title: "귤" }
]
undefined
const a = fruits[0].number;
undefined
const b = fruits[0].title;
undefined
const c = ' ';
undefined
a+c+b
'1 레드향'
fruits[0].number
1
fruits[0].title
'레드향'
fruits[0].number + " " + fruits[0].title;
'1 레드향'
fruits[1].number + " " + fruits[1].title;
'2 샤인머스켓'
fruits[2].number + " " + fruits[2].title;
'3 산청딸기'
for(let i=0;i<fruits.length;i++){
    fruits[i].number + " " + fruits[i].title;
}
'10 귤'