/* 필드값에 type 지정 */
class Person {
  data: number = 0;
}

/* constructor type 지정 */
class Person2 {
  name;
  age;
  constructor(a: string) {
    this.name = a;
    this.age = 20;
  }
}

/* methods 타입지정 */
class Person3 {
  add(숫자: number): number {
    return 숫자 + 1;
  }
}

/*
    (숙제1) Car 클래스를 만들고 싶습니다.
    1. 대충 { model : '소나타', price : 3000 } 이렇게 생긴 object를 복사해주는 class를 만들어보십시오.
    2. 그리고 복사된 object 자료들은 .tax() 라는 함수를 사용가능한데 현재 object에 저장된 price의 10분의1을 출력해주어야합니다. 
    3. model과 price 속성의 타입지정도 알아서 잘 해보십시오. tax() 함수의 return 타입도요. 
*/
class Car {
  model: string;
  price: number;
  constructor(model, price) {
    this.model = model;
    this.price = price;
  }
  tax(): number {
    return this.price / 10;
  }
}

/*
    (숙제2) class인데 파라미터가 잔뜩 들어가는 class Word를 만들어봅시다.
    1. object 만들 때 new Word() 소괄호 안에 숫자 혹은 문자를 입력하면 
    2. 숫자는 전부 object 안의  num 속성 안에 array 형태로 저장되고 
    3. 문자는 전부 object 안의 str 속성 안에 array 형태로 저장되는 class를 만들어봅시다.
    4. class 만들 때 넣을 수 있는 숫자와 문자 갯수는 일단 제한은 없습니다. 그리고 타입 빼먹지 마셈 
*/
class Word {
  num: number[];
  str: string[];
  constructor(...param) {
    this.num = [];
    this.str = [];
    param.forEach((item) => {
      if (typeof item === "number") {
        this.num.push(item);
      }
      if (typeof item === "string") {
        this.str.push(item);
      }
    });
  }
}

let obj = new Word("kim", 3, 5, "park");
console.log(obj);
