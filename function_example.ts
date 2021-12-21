// 파라미터 와 return 에 type 부여
function example(x: number): number {
  return x * 2;
}

// void 타입의 함수
function voidExample(x: number): void {
  // return 이 있으면 오류가 난다
  // return y+2
}

// 파라미터가 옵션인경우
function paramExample(x?: number) {}
paramExample();
paramExample(2);

// 파라미터 와 return 에 Union type 부여
function unionExample(x?: number | string): number | string {
  return x;
}

/* (숙제1) 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고
아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수를 만들어봅시다.
파라미터와 return 타입지정도 잘 해봅시다. */
function homework1(name?: string): void {
  if (name) {
    console.log("안녕하세요" + name);
  } else {
    console.log("이름이 없습니다");
  }
}

homework1();
homework1("정정훈");

/* (숙제2) 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.
예를 들어 '245' 이런 문자를 입력하면 3이 return 되어야합니다.
숫자도 마찬가지로 9567 이런 숫자를 입력하면 4가 return 되어야합니다.
숫자 또는 문자 이외의 자료가 들어오면 안됩니다.  */
function homework2(x: string | number): number {
  //   return x.toString().length
  x = x.toString();
  length = x.length;
  return length;
}

homework2("asdf");
homework2(42342);

/* (숙제3) 결혼 가능 확률을 알려주는 함수를 만들어봅시다.
1. 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수 ('상' or '중' or '하') 를 입력할 수 있어야합니다. 
2. 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산합니다. 
3. 총 점수가 600점 이상일 경우 "결혼가능"을 return 해줘야합니다. 그 외엔 아무것도 return하지 않습니다. */
function homework3(pay: number, home: boolean, face: string): string | void {
  // let score :number = 0;
  // score += money;
  // if (house === true){
  //     score += 500
  // }
  // if (charm === '상'){
  //     score += 100
  // }
  // if (score >= 600){
  //     return '결혼가능'
  // }
  let grade: number = 0;
  if (face === "상") {
    if (home) {
      grade = pay + 500 + 100;
    } else {
      grade = pay + 100;
    }
  } else {
    if (home) {
      grade = pay + 500;
    } else {
      grade = pay;
    }
  }
  if (pay >= 600) {
    return "결혼가능";
  }
}
