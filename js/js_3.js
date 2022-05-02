//Truthy & Falsy

let a = Infinity; //참 같은 값,,,true가 아니어도 참으로 인식

if (a) {
  console.log("true");
} else {
  console.log("false");
}

let b = null; //공백,null,0,undefined,-0,NaN은 false로 인식

if (b) {
  console.log("true");
} else {
  console.log("false");
}
const getName = (person) => {
  if (!person) {
    // false NOT = true
    return "객체가 아닙니다.";
  }
  return person.name;
};

let person;
const name = getName(person);
console.log(name);

let a1 = 3;
//삼항 연산자
a1 >= 0 ? console.log("양수") : console.log("음수");

let b1 = [];
const arrayStatus = b1.length === 0 ? "비었음" : "안 비었음";
console.log(arrayStatus);

let c;
const result = c ? true : false; //undefined이므로 false
console.log(result);

//학점계산프로그램
let score = 100;

// score >= 90 ?
// console.log("A")
// : score >= 50
// ? console.log("B")
// : console.log("C");

if (score >= 90) {
  console.log("A");
} else if (score >= 50) {
  console.log("B");
} else {
  console.log("C");
}
