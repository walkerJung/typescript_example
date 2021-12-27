/*
    (숙제1) 다음 x, y, z 속성의 특징을 설명해보십시오.
    class User {
        private static x = 10;
        public static y = 20;
        protected z = 30;
    }
    누가 쓸 수 있고, 어디서 수정할 수 있는지 이런 것들이요.
    친구가 물어봤을 때 어떻게 답해줄 것입니까

    x = class 내부 에서 User.x 로 사용,수정 할수있다, User 의 자식들은 x,y 사용 불가
    y = class 내부, 외부 에서 User.x 로 사용, 수정 할수있다, User 의 자식들은 x,y 사용 불가
    z = User class 와 User class 를 extends 한 class 에서 사용, 수정 할수있다.
*/
/*
    (숙제2) x 속성에 숫자를 더해주는 함수가 필요합니다.
    class User {
        private static x = 10;
        public static y = 20;
    }
    User.addOne(3) //이렇게 하면 x가 3 더해져야함
    User.addOne(4) //이렇게 하면 x가 4 더해져야함
    User.printX()  //이렇게 하면 콘솔창에 x값이 출력되어야함
    저렇게 User.addOne() 쓸 때마다 x가 증가하는 함수는 어떻게 만들 수 있을까요?
    그리고 x값을 콘솔창에 출력해주는 printX() 함수도 한번 만들어보십시오.
    (조건) private static x = 10; 이 코드 수정금지
*/
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.addOne = function (num) {
        User.x += num;
    };
    User.prototype.printX = function () {
        console.log(User.x);
    };
    User.x = 10;
    User.y = 20;
    return User;
}());
/*
    (숙제3) 이런거 어떻게 만들게요
    웹 요소 애니메이팅하는거 이런 것의 기초 격인데
    let 네모 = new Square(30, 30, 'red');
    네모.draw()
    네모.draw()
    네모.draw()
    네모.draw()
    이렇게 네모.draw()를 할 때마다
    index.html에 가로 30px, 세로 30px, 배경색이 'red' 의 <div> 박스가
    가로 400px 세로 400px 공간 안에 무작위로 배치되어야합니다.
*/
var SquareDraw = /** @class */ (function () {
    function SquareDraw(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    SquareDraw.prototype.draw = function () {
        var a = Math.random();
        var square = "<div style=\"position:relative; \n        top:".concat(a * 400, "px; \n        left:").concat(a * 400, "px; \n        width:").concat(this.width, "px; \n        height : ").concat(this.height, "px; \n        background:").concat(this.color, "\"></div>");
        document.body.insertAdjacentHTML("beforeend", square);
    };
    return SquareDraw;
}());
