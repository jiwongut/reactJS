//반복문
let person = {
  name: "jiwon",
  age: 25,
  tall: 160
};
const personkey = Object.keys(person);

for (let i = 0; i < personkey.length; i++) {
  const curkey = personkey[i];
  const curValue = person[curkey];
  console.log(`${curValue}:${curkey}`);
}
//value들을 배열처럼 받아서 반복문으로 반환
const personValues = Object.values(person);

for (let i = 0; i < personValues.length; i++) {
  console.log(personValues[i]);
}

const arr = [1, 2, 3, 4];
const newarr = [];

//배열 내장 함수 forEach,map,includes,indexOf,findIndex,filter,slice

arr.forEach((elm) => console.log(elm)); //callback 함수

arr.forEach(function (elm) {
  newarr.push(elm * 2);
});

const newarr1 = arr.map((elm) => {
  return elm * 2; //하나씩 리턴
});

//console.log(newarr1);

let num = 3;
//1
arr.forEach((elm) => {
  if (elm === num) {
    console.log(true);
  }
});
//2 내장 함수 includes
console.log(arr.includes(num));

console.log(arr.indexOf(num)); //-1 = false

const arrColor = [
  { num: 1, color: "red" },
  { num: 2, color: "yellow" },
  { num: 3, color: "green" }
];

const arrColor1 = [
  { num: 4, color: "blue" },
  { num: 5, color: "pink" }
];

console.log(arrColor.findIndex((elm) => elm.color === "blue"));
console.log(arrColor.filter((elm) => elm.color === "blue")); //배열로 반환

console.log(arrColor.slice(0, 2)); //0,1번째를 반환

console.log(arrColor.concat(arrColor1)); // 배열 합치기


let chars = ["다", "가", "나", "마"];
chars.sort(); //원본 배열의 순서를 정렬
console.log(chars);

let nums = [0, 1, 3, 2, 7, 30, 10];
const compare = (a, b) => {
  if (a > b) {
    //2.크
    return 1;
  }
  if (a < b) {
    //3.작
    return -1;
  }
  //1.같
  return 0;
}; //비교 함수를 직접 작성

nums.sort(compare);
console.log(nums);

const hello = ["지원", "님", "안녕하세요", "또오셨네요"];
console.log(hello.join(" ")); //합치기("중간에 넣을 요소")