//and && or || not !
//단락회로평가
const getName = (person) => {
  const name = person && person.name;
  return name || "객체가 아닙니다.";
};

let person = { name: "jiwon" };
const name = getName(person);
console.log(name);

//조건문
function iskoreanFood(food) {
  if (["불고기","떡볶이","비빔밥".includes(food)]) {
    return true;
  }
  return false;
}

const food1 = iskoreanFood("불고기");
console.log(food1);

const meal = {
    한식: "불고기",
    중식: "멘보샤",
    일식: "초밥",
    양식: "스테이크"
  };

  //선택지가 많은 경우에
  const getMeal1 = (mealType) => {
    return meal[mealType || "굶기"];
  };
  
  console.log(getMeal1("한식"));
  
  const getMeal = (mType) => {
    if (mType === "한식") return "불고기";
    if (mType === "중식") return "멘보샤";
    if (mType === "일식") return "초밥";
    return "굶기";
  };
  
  console.log(getMeal("한식"));