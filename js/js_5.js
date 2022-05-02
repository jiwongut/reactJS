//비 구조화 할당

let [one, two, thr] = ["one", "two", "thr"]; //순서대로 할당
console.log(one, two, thr);

let b = 5;
let c = 7;

[b, c] = [c, b]; //swap
console.log(b, c);

let object = { name: "jiwon", age: 25 };
let { name: myName, age } = object; //key값에 변수 지정하기 
console.log(myName, age);

//spread 연산자
const cookie = {
    base: "cookie",
    madeIn: "ko"
  };
  const chococookie = {
    ...cookie, //객체의 값을 새로운 객체에 펼쳐주는 역할
    tooping: "choco"
  };
  const bluebcookie = {
    tooping: "blueberry"
  };
  const strawberrycookie = {
    tooping: "strawberry"
  };
  
  console.log(chococookie);
  
  const me = ["jiwon", "hehe"];
  const you = ["who", "areu"];
  
  const menyou = [...me, "and", ...you];
  console.log(menyou);