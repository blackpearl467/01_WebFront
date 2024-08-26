/* 매개변수, 전달인자 */

 const input1 = document.querySelector("#input1");
 const btn1 = document.querySelector("#btn1");

 // 2개의 값을 전달받아 출력하는 함수
 function print1(num, str) { //함수 선언
  // 함수 정의
  console.log(`${num} 은/는 ${str} 입니다`);
 }
 // #btn1 클릭 시 #input1의 값을 읽어와 print1() 함수 호출
 btn1.addEventListener("click", function() {
  const value = input1.value;
  if(value.length == 0) {
    console.log("값을 입력해주세요");
    return; //함수 종료 + 호출한 곳으로 돌아감
  }
  let result; //결과를 저장할 변수 선언

  if(Number(value) == 0) result = "0";
  else if(Number(value) > 0) result = "양수";
  else                       result = "음수";

  //함수 호출(값 전달)
  //중요!!!!!!! 전달되는 값의 순서가 중요합니다!
  print1(value, result); //print1(result, value);
  //함수의 정의부분을 수행하겠다는것
});

// 매개변수로 배열 전달하기

function arrayTest(arr) {
  //전달받은 배열의 모든 요소 출력하기
  for(let i=0; i<arr.length; i++) {

    //arr[i]에 있는 값이 "멜론"과 일치하면
    //해당 요소의 값을 딸기로 재대입해라
    if(arr[i] == "멜론") arr[i] = "딸기";

    console.log(`${i}번 인덱스 값 : `, arr[1]);
  }
}
  //btn2a 클릭 되었을때 arrayTest() 함수 호출
  document.querySelector("#btn2a").addEventListener("click", function() {

  const arr1 = [10,20,30];
  const arr2 = ["사과", "바나나", "멜론"];

  arrayTest(arr1);
  arrayTest(arr2);

  console.log("arr2[2]: ", arr2[2]);

  //왜 멜론이 아니라 딸기가 출력될까?
  //-> arrayTest(arr2) 호출 시
  // arr2 배열을 통째로 복사해서 전달하는게 아니라
  // arr2에 저장된 주소만 보내서 함수를 수행

  // arrayTest() 함수에서 arr2와 같은 배열을 참조해서 수정
  // -> 함수 수행 후 돌아와서도 참조하고 있던 배열의 2번 인덱스 값이 변화되어 있음

  //참조란?
  /*
  -객체 지향 언어에서 배열, 객체 등 값을 여러개 가지고 있는 자료형인데
  변수는 값을 1개만 저장할 수 있기 때문에

  object를 메모리 다른곳에 저장하고
  저장된 곳의 주소를변수에 저장해서

  필요할때마다 해당 주소를 찾아가
  원하는 값을 얻어오거나 수정할 수 있게 하는 것

  == 주소를 찾아가는 것을 [참조] 라고 한다!!
  */
});

//매개변수로 요소 전달
function btn2bFn(el) {
  //매개변수 el(element) : 이벤트가 발생한 요소
  el.style.backgroundColor="yellow";
}

//매개변수로 함수 전달

function print2(fn){
  //console.log(fn);
  console.log(`a+b = ${fn(3,4)}`);
}
document.querySelector("#btn2c").addEventListener("click", function() {

  //함수도 변수에 저장 가능! 변수명 == 함수명
  const sumFn = function(a, b) {
    return a + b; //함수를 종료하고
                  //a+b 를 가지고 호출한 곳으로 돌아감
  }
  //전달인자로 함수를 전달
  print2(sumFn);
});


//전달받은 2개의 값을 곱해서 리턴(반환)
function returnTest(num1, num2) {
  return num1 * num2; //함수 종료 + return 옆에 작성된 값을 가지고
                      //호출한 쪽으로 돌아감
}
//전달받은 배열
function sumFn(arr) {
  let sum=0; // 더한값을저장할
  for(let i=0; i<arr.length; i++) {
    sum += arr[1];
  }
  return 
}
//return 확인하기
document.querySelector("#btn3a").addEventListener("click", function() {

  const numbers = []; //빈 배열 생성

  // 배열.push(값) : 배열의 마지막 요소로 값을 추가
  numbers.push(30);
  numbers.push(50);
  numbers.push(4);
  numbers.push(returnTest(2,5)); // 함수를 호출해서 되돌려받은 값(return 값;)을 push 하기

  console.log(numbers);

  console.log("합계:", sumFn(numbers)) // 94
});


// 화살표 함수

//클래스가 arrow인 요소를 모두 얻어와 배열로 저장
const arrowList = document.querySelectorAll(".arrow");

  //1.화살표 함수 기본 형태
  arrowList[0].addEventListener("click", () => {
  alert("화살표 함수 기본 형태 연습");

  });

  //2.매개변수가 1개인 경우 : () 생략 가능
  arrowList[1].addEventListener("click", e => {
    e.target.style.backgroundColor = "pink";
  });

  
  
  //4.return 한 줄만 작성된 경우
  function twoNumberPlus( otherFn ) {
    const input1 = Number(prompt("첫번째값"));
    const input2 = Number(prompt("두번째값"));

    alert(otherFn(input1,input2));//호출
  }
  arrowList[2].addEventListener("click", () => {
    twoNumberPlus( (a, b) => a + b );//호출x 정의한것
    //return 한 줄만 있는 경우
    // {}, return 생략 가능
  });
  //5.return 한 줄인데 object 반환하는 경우
  function printObject( otherFn ) { 
    /* otherFn :
      (name, age) => {
        return {"name": name, "age": age}}
    */
   console.log(otherFn("홍길동", 20)); //{"name":"홍길동","age":20}
  }

  arrowList[3].addEventListener("click", () => {
    printObject( (name, age) => {
      return {"name": name, "age": age}
      //JS객체{K:V, K:V ...}
    } );
  });


// 즉시 실행 함수
( ()=> {
  console.log("즉시 실행 함수 입니다");
} )()


// ----
//함수연습문제
// 1. name이라는 매개변수를 받아 "Hello, [name]!"를 출력하는 함수를 선언 및 정의하고 호출하시오
function fn1(name) {
  console.log(`1번 : Hello, ${name}!`);
}

fn1('미현'); // Hello, 미현!


// 2. 두 개의 숫자를 매개변수로 받아 그 합을 반환하는 함수를 선언 및 정의하고 호출하시오
function addNumbers(a, b) {
  return a + b;
}

console.log("2번 : " + addNumbers(3, 4)); // 7



// 3. 두 개의 숫자를 매개변수로 받아 곱한 결과를 반환하는 화살표 함수를 선언 및 정의하고 호출하시오
const multiply = (a, b) => a * b;
console.log( "3번 : " + multiply(2, 5)); // 10



// 4. 두 개의 숫자를 매개변수로 받아, 첫 번째 숫자가 두 번째 숫자보다 크면 "첫 번째 숫자가 더 큽니다"를 출력하고, 
// 그렇지 않으면 "두 번째 숫자가 더 크거나 같습니다"를 출력하는 함수를 선언 및 정의하고 호출하시오
function compareNumbers(a, b) {
  if (a > b) {
      console.log("4번 : 첫 번째 숫자가 더 큽니다");
  } else {
      console.log("4번 : 두 번째 숫자가 더 크거나 같습니다");
  }
}
compareNumbers(5, 3); // 첫 번째 숫자가 더 큽니다
compareNumbers(2, 4); // 두 번째 숫자가 더 크거나 같습니다



// 5. 문자열을 매개변수로 받아 문자열의 길이를 출력하는 함수를 선언 및 정의하고 호출하시오
function printLength(str) {
  console.log("5번 : "+ str.length);
}

printLength('JavaScript'); // 10



// 6. 문자열과 반복 횟수를 매개변수로 받아, 해당 문자열을 주어진 횟수만큼 반복하여 출력하는 함수를 선언 및 정의하고 호출하시오
function repeatString(str, times) {

  let result = '';

  for (let i = 0; i < times; i++) {
      result += str;
  }

  console.log("6번 : "+result);

}

repeatString('Hello', 3); // HelloHelloHello



// 7. 숫자를 매개변수로 받아 그 숫자가 짝수인지 아닌지를 true 또는 false로 반환하는 함수를 선언 및 정의하고 호출하시오
function isEven(num) {
  return num % 2 === 0;
}
console.log("7번 : " + isEven(4)); // true
console.log("7번 : " + isEven(7)); // false



// 8. 세 개의 숫자를 매개변수로 받아 그 중 가장 큰 숫자를 반환하는 함수를 선언 및 정의하고 호출하시오
function findMax(a, b, c) {
  
  let max = a;
  if(max < b) {
    max = b;
  } 

  if(max < c) {
    max = c;
  }

  return max;

  // 내장함수 Math.max() : 전달받은 값 중 가장 큰 수 반환
  //return Math.max(a, b, c);
}

console.log("8번 : " + findMax(1, 5, 3)); // 5



// 9. 배열을 매개변수로 받아 첫 번째 요소를 반환하는 화살표 함수를 선언 및 정의하고 호출하시오
const getFirstElement = (arr) => arr[0];
console.log("9번 : " + getFirstElement([10, 20, 30])); // 10



// 10 .배열을 매개변수로 받아 배열의 모든 숫자의 합과 평균을 객체 형태로 반환하는 함수를 선언 및 정의하고 호출하시오
function sumAndAverage(arr) {
  // let sum = 0;

  // for(let i=0; i<arr.length; i++) {
  //   sum += arr[i];
  // }

  let sum = arr.reduce((acc, curr) => acc + curr);
  // 배열.reduce() : JS 배열의 메서드로, 배열의 모든 요소를 순회하면서 하나의 결과값을 누적하여 반환
  // acc(accumulator) : 누산기 - 결과를 누적
  // curr(currentValue) : 현재값 -  현재 배열 요소 값

  let avg = sum / arr.length;

  return { "합계" : sum, "평균" : avg };
}

console.log(sumAndAverage([1, 2, 3, 4, 5])); // { "합계" : 15, "평균" : 3 }


// 11. 숫자 두 개와 연산을 수행하는 함수를 매개변수로 받아, 두 숫자에 해당 연산을 적용한 결과를 반환하는 함수를 선언 및 정의하고 호출하시오
function calculate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

function multi(x, y) {
  return x * y;
}

console.log("11번 : " + calculate(5, 3, add));       // 8
console.log("11번 : " + calculate(5, 3, multi));  // 15


// 12. 사람의 이름과 인사말을 출력하는 함수를 매개변수로 받아, 해당 이름과 인사말을 사용하여 인사를 출력하는 함수를 선언 및 정의하고 호출하시오

// 인사를 출력하는 함수
function greet(name, callback) {
  // callback 함수 : 다른 함수의 매개변수로 전달되어, 특정 작업이 완료된 후에 호출되는 함수
  // 매개변수로 전달, 지연된 실행, 비동기 작업 등에서 이용
  callback(name);
}

// 기본 인사말을 출력하는 함수
function sayHello(name) {
  console.log("12번 : " +`안녕하시오, ${name}!`);
}

// 다른 인사말을 출력하는 함수
function sayGoodbye(name) {
  console.log("12번 : " +`잘가, ${name}!`);
}

// callback 함수 sayHello와 sayGoodbye
greet('길동', sayHello);  // 안녕하시오, 길동!
greet('미현', sayGoodbye);  // 잘가, 미현!

console.log("test~ 학원에서");