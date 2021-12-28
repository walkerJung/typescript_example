/* Generic 적용한 함수만들기 */
function genericEx<MyType>(x: MyType[]): MyType {
  return x[0];
}

let a = genericEx<number>([4, 2]);
let b = genericEx<string>(["kim", "park"]);

/*
    function 함수<MyType>(x: MyType) {
        return x - 1;
    }

    let a = 함수<number>(100);

    MyType 에 <number> 가 아닌것이 들어올수도있어서
    return x-1 에 오류가 나있는 이유.
    그걸 방지하려면 extends 로 type 을 제한해야함
*/

/* Generic 타입 제한하기 (constraints) */
function genericEx2<MyType extends number>(x: MyType) {
  return x - 1;
}

let c = genericEx2<number>(100); //잘됩니다

interface lengthCheck {
  length: number;
}
function gex3<MyType extends lengthCheck>(x: MyType) {
  return x.length;
}

let t1 = gex3<string>("hello"); //가능
// let t2 = 함수<number>(1234); //에러남

/*
    (숙제1) 문자를 집어넣으면 문자의 갯수, array를 집어넣으면 array안의 자료 갯수를 콘솔창에 출력해주는 함수는 어떻게 만들까요? 
    연습삼아 Generic 이런걸로 만들어봅시다. 굳이 Generic 이런게 필요는 없겠지만요 
    (동작 예시)
    함수<string>('hello') 이렇게 사용하면 콘솔창에 5가 나와야합니다. 
    함수<string[]>( ['kim', 'park'] ) 이렇게 사용하면 콘솔창에 2가 나와야합니다
*/
interface Ex3 {
  length: number;
}

function genericEx3<T extends Ex3>(x: T) {
  console.log(x.length);
}

genericEx3<string>("rkskekfk");
genericEx3<string[]>(["가나다", "라", "마"]);

/*
    (숙제2) Animal 이라는 타입이 있습니다.
    interface Animal {
        name : string;
        age : number 
    }

    let data = '{"name" : "dog", "age" : 1 }'
    그리고 data라는 변수도 있습니다. object처럼 생겼지만 따옴표 쳐진 JSON 자료입니다. 
    data라는 JSON 자료를 object { } 자료로 변환을 해서 return 해주는 함수를 만들어보십시오.
    근데 변환된 object의 타입은 Animal이 되었으면 좋겠는데 어떻게 코드를 짜면 될까요?
    오늘 배운 Generic을 이용해서 구현해보도록 합시다.  
    (동작 예시)
    함수<Animal>(data) 이렇게 쓰면 이 자리에 { name : 'dog' , age : 1 } 이런 object 자료가 남아야합니다. 근데 타입은 Animal임
*/
interface Animal {
  name: string;
  age: number;
}

let data = '{"name" : "dog", "age" : 1 }';

function genericEx4<T>(str: string): T {
  return JSON.parse(str);
}
genericEx4<Animal>(data);

/*
    (숙제3) class 를 수정해봅시다.
    class Person {
        name;
        constructor(a){
            this.name = a;
        }
    }
    let a = new Person('어쩌구');
    a.name //any 타입이 되었넹

    지금 만든 class는 new Person('어쩌구') 라고 분명 문자를 집어넣었는데 any 타입이 name 속성에 부여됩니다.
    이게 싫어서 파라미터에 string을 집어넣으면 string 타입
    number를 집어넣으면 number 타입
    string[]을 집어넣으면 string[] 타입이 되게 하려면 위의 코드를 어떻게 수정해야할까요? 
    오늘 배운 Generic을 이용해봅시다.  
*/
class Person4<T> {
  name;
  constructor(a: T) {
    this.name = a;
  }
}
let a4 = new Person4<string>("어쩌구");
a4.name; //any 타입이 되었넹
