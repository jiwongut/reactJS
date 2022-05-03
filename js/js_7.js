//async 기능
function delay(ms) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  }
  
  async function helloa() {
    await delay(3000); //비동기 함수를 동기적으로 수행
    return "hello async";
  }
  
  async function main() {
    const res = await helloa();
    console.log(res);
  }
  
  //console.log(helloa()); Promise Pending으로 반환
  
  helloa().then((res) => {
    console.log(res);
  });
  
  //API => 데이터를 받기 위해 말을 건다. 웨이터의 역할. json placeholder(open API)
  //주소 fetch로 불러오기, 데이터 불러오기
  async function getData() {
    let rawResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
    let jsonResponse = await rawResponse.json();
    console.log(jsonResponse);
  }
  
  getData();