/* Generic 적용한 함수만들기 */
function genericEx(x) {
    return x[0];
}
var a = genericEx([4, 2]);
var b = genericEx(["kim", "park"]);
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
function genericEx2(x) {
    return x - 1;
}
var c = genericEx2(100); //잘됩니다
function gex3(x) {
    return x.length;
}
var t1 = gex3("hello"); //가능
function genericEx3(x) {
    console.log(x.length);
}
genericEx3("rkskekfk");
genericEx3(["가나다", "라", "마"]);
var data = '{"name" : "dog", "age" : 1 }';
function genericEx4(str) {
    return JSON.parse(str);
}
genericEx4(data);
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
var Person4 = /** @class */ (function () {
    function Person4(a) {
        this.name = a;
    }
    return Person4;
}());
var a4 = new Person4("어쩌구");
a4.name; //any 타입이 되었넹
