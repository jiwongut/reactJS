/*자바스크립트 - single thread
non-blocking => 비동기 방식

JS Engine
Heap
Call Stack

비동기 작업 - Pending(wait)/ Fulfiiled(success)/ Rejected(fail)

function taskA(a, b, cb) {
  setTimeout(() => {
    const res = a + b; //res=지역 상수
    cb(res);
  }, 2000);
}

function taskB(a, cb) {
  setTimeout(() => {
    const res1 = a * 2;
    cb(res1);
  }, 1000); //taskA보다 먼저 실행
}

taskA(4, 5, (a_res) => {
  console.log("A result:", a_res);
  taskB(a_res, (b_res) => {
    console.log("B result:", b_res);
  });
}); //이것은 콜백 지옥 ...

console.log("코드끝");*/

//Promise

function isPositive(num, resolve, reject) {
    setTimeout(() => {
      if (typeof num === "number") {
        //성공
        resolve(num >= 0 ? "양수" : "음수");
      } else {
        //실패
        reject("주어진 값이 숫자형이 아닙니다.");
      }
    }, 2000);
  }
  //executor = 실행자
  function isPositiveP(num) {
    const executor = (resolve, reject) => {
      setTimeout(() => {
        if (typeof num === "number") {
          //성공
          console.log(num);
          resolve(num >= 0 ? "양수" : "음수");
        } else {
          //실패
          reject("주어진 값이 숫자형이 아닙니다.");
        }
      }, 2000);
    };
    const asyncTask = new Promise(executor);
    return asyncTask; //Promise 객체로 반환
  }
  
  const res = isPositiveP([]);
  res
    .then((res) => {
      console.log("작업 성공", res);
    })
    .catch((err) => {
      console.log("작업 실패", err);
    });

  // isPositive(
  //   10,
  //   (res) => {
  //     console.log("성공", res);
  //   },
  //   (err) => {
  //     console.log("실패", err);
  //   }
  // );
  
//*** Promise 써보기
  function taskA(a, b) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const res = a + b;
        resolve(res);
      }, 3000);
    });
  }
  
  function taskB(a) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const res = a * 2;
        resolve(res);
      }, 1000);
    });
  }
  
  function taskC(a) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const res = a * -1;
        resolve(res);
      }, 2000);
    });
  }
  // *** then chaining
  taskA(5, 1) 
    .then((a_res) => {
      console.log("A result:", a_res);
      return taskB(a_res); //반환하는 값
    })
    .then((b_res) => {
      console.log("B result:", b_res);
      return taskC(b_res);
    })
    .then((c_res) => {
      console.log("C result:", c_res);
    });
  
  // taskA(3, 4, (a_res) => {
  //   console.log("taskA", a_res);
  //   taskB(a_res, (b_res) => {
  //     console.log("taskB", b_res);
  //     taskC(b_res, (c_res) => {
  //       console.log("taskC", c_res);
  //     });
  //   });
  // }); //콜백 지옥
  