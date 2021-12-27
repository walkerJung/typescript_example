/*
    (숙제1) 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다.
    최댓값(6,3,7,2) 이렇게 쓰면 7이 return 되어야합니다.
    (조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능합니다.
    (조건2) Math.max() 사용금지 반복문이나 쓰셈
*/
function maxNum() {
    var numArray = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numArray[_i] = arguments[_i];
    }
    var _loop_1 = function (i) {
        var result = 0;
        numArray.forEach(function (i) {
            if (result < i) {
                result = i;
            }
        });
        return { value: result };
    };
    for (var i = void 0; i < numArray.length; i++) {
        var state_1 = _loop_1(i);
        if (typeof state_1 === "object")
            return state_1.value;
    }
}
function destruct(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user, comment, admin);
}
/*
    (숙제3) 이렇게 생긴 array 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다.
    함수( [40, 'wine', false] )
    어떻게 코드를 짜야할까요?
    (조건1) 오늘 배운 파라미터 destructuring 문법을 써봅시다.
    (조건2) 함수실행시 입력한 파라미터들을 전부 콘솔창에 출력해줘야합니다.
*/
function destruct2(_a) {
    var a = _a[0], b = _a[1], c = _a[2];
    console.log(a, b, c);
}
