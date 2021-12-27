// union type 의 파라미터가 어떤 type 인지 확실히 정해주는것이 narrowing 이다
function narrowingExample(x: number | string) {
  if (typeof x === "number") {
    return x + 1;
  } else if (typeof x === "string") {
    return x + 1;
  } else {
    return 0;
  }
}

/* 
    (숙제1) 숫자여러개를 array 자료에 저장해놨는데
    가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다.
    이걸 클리닝해주는 함수가 필요합니다. 
    클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면
    [1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오.
    모르는 부분은 구글검색해도 봐드림 
*/
function cleaning(array: (string | number)[]): number[] {
  let cleanArray: number[] = [];

  //   array.forEach((b) => {
  //     if (typeof b === "string") {
  //       cleanArray.push(parseFloat(b));
  //     } else {
  //       cleanArray.push(b);
  //     }
  //   });
  for (let i = 0; i < array.length; i++) {
    let value: string | number = array[i];
    if (typeof value === "string") {
      cleanArray.push(parseInt(value));
    } else {
      cleanArray.push(value);
    }
  }
  return cleanArray;
}

cleaning([1, "2", 3]);

/*
    (숙제2) 다음과 같은 함수를 만들어보십시오.
    let 철수쌤 = { subject : 'math' }
    let 영희쌤 = { subject : ['science', 'english'] }
    let 민수쌤 = { subject : ['science', 'art', 'korean'] }
    지금 여러 변수에 선생님이 가르치고 있는 과목이 저장이 되어있습니다. 
    과목 1개만 가르치는 쌤들은 문자 하나로 과목이 저장이 되어있고
    과목 2개 이상 가르치는 쌤들은 array 자료로 과목들이 저장되어있습니다. 
    철수쌤같은 선생님 object 자료를 집어넣으면 
    그 선생님이 가르치고 있는 과목중 맨 뒤의 1개를 return 해주는 함수를 만들어봅시다.
    그리고 타입지정도 엄격하게 해보도록 합시다. 
*/
function subject(oj: { subject: string | string[] }): string {
  if (typeof oj.subject === "string") {
    return oj.subject;
  } else {
    return oj.subject[oj.subject.length - 1];
  }
}

subject({ subject: ["hi", "hello", "bye"] });

/* && 연산자 narrowing */
function printAll(strs: string | undefined) {
  if (strs && typeof strs === "string") {
    console.log(strs);
  }
}

/* in 연산자 narrowing */
type Fish = { swim: string };
type Bird = { fly: string };
function 함수(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim;
  }
  return animal.fly;
}

/* instanceof narrowing */
let 날짜 = new Date();
if (날짜 instanceof Date) {
  console.log("참이에요");
}

/* type 을 특정지을수 있는걸로 narrowing */
type Car2 = {
  wheel: "4개";
  color: string;
};
type Bike = {
  wheel: "2개";
  color: string;
};

function narrowingexam(x: Car2 | Bike) {
  if (x.wheel === "4개") {
    console.log("the car is " + x.color);
  } else {
    console.log("the bike is " + x.color);
  }
}
