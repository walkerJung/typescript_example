/* Tuple 타입 */
let 멍멍이: [string, boolean];
멍멍이 = ["dog", true];

/* Tuple 응용 : rest parameter */
function tupleEx1(...x: [string, number]) {
  console.log(x);
}
tupleEx1("kim", 123); //가능
//   함수('kim', 123, 456)  //에러
//   함수('kim', 'park')  //에러

/* array 두개를 spread 연산자로 합치는 경우 타입지정은? */
let arr = [1, 2, 3];
let arr2: [number, number, ...number[]] = [4, 5, ...arr];

/* 
    (숙제1) 여러분이 최근에 사먹은 음식의 1. 이름 2. 가격 3. 맛있는지여부를 array 자료에 담아보고 타입지정까지 해보십시오.
    오늘 배운 tuple 타입으로 타입지정합시다. 
    쉬워서 답은 생략합니다. 
 */
let food: [string, number, boolean] = ["닭가슴살", 5000, true];

/*
    (숙제2) 이렇게 생긴 자료는 타입지정 어떻게 해야할까요?
    let arr = ['동서녹차', 4000, true, false, true, true, false, true]
    몇개인지는 모르겠지만 true와 false가 셋째 자료부터 잔뜩 들어올 수 있다고 합니다. 
    tuple 타입과 spread 연산자를 써보도록 합시다. 
*/
let arrr: [string, number, ...boolean[]] = [
  "동서녹차",
  4000,
  true,
  false,
  true,
  true,
  false,
  true,
];

/*
    (숙제3) 함수에 타입지정을 해보도록 합시다.
    1. 이 함수의 첫째 파라미터는 문자,
    2. 둘째 파라미터는 boolean,
    3. 셋째 파라미터부터는 숫자 또는 문자가 들어와야합니다. 
    그럼 함수에 파라미터를 어떻게 만들고 타입지정은 또 어떻게 해야할까요? 
    오늘 배운 tuple 타입과 rest parameter를 사용해봅시다.
*/
function tupleEx(...rest: [string, boolean, ...(number | string)[]]) {}

/*
    (숙제4) 다음과 같은 문자/숫자 분류기 함수를 만들어보십시오.
    파라미터 중 문자만 모아서 [] 에 담아주고, 숫자만 모아서 [] 에 담아주는 함수가 필요합니다.
    문자 숫자 외의 자료는 입력불가능하고 파라미터 갯수 제한은 일단 없습니다. 
    함수 만들어보시고 함수의 파라미터/return 타입지정도 확실하게 해봅시다. 
*/
function tupleEx2(...rest: (string | number)[]): [string[], number[]] {
  let result: [string[], number[]] = [[], []];

  rest.forEach((a) => {
    if (typeof a === "string") {
      result[0].push(a);
    } else {
      result[1].push(a);
    }
  });

  return result;
}
