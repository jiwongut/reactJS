//함수
function getArea(width,height){ //매개변수 width,height
    let area = width * height;
    console.log(area);
    return area;
} //함수 선언식

getArea(10,20); //호출시

let hello = function(){
    return "안녕하세요";
}; //함수 표현식

const hellotext = hello();
console.log(hellotext);

let helloA = () => "안녕하세요";
console.log(helloA());
