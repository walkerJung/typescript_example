- Typescript 란?

  1. Javascript 에 type을 엄격하게 지정해준것

- Typescript 설치

  1. npm install -g typescript

- Typescript 실행 명령어

  1. tsc -w

- Typescript 컴파일시 세부설정 (tsconfig.json)

  1. tsconfig.json 파일 생성 (파일 열어서 내용 확인해보기)

- Typescript 기본 타입 정리 (type_example.ts)

  1. 꿀 팁은 사실 모든 type을 지정해주지 않아도 type지정은 값에따라 자동으로 된다

- Typescript union type, any, unknown (unionType_example.ts)

  1. 2가지 이상 type 을 사용할때 사용한다
  2. 괄호()로 묶어주고 | 를 사용한다 (파일 참고)
  3. any 타입은 모든 타입을 다 사용한다. any는 type을 파괴한다고 생각하면 된다. 즉 string 타입에 any 타입의 변수가 들어갈수 있다
  4. unknown 타입은 모든 타입을 다 사용할수 있지만, unknown 타입이다. 즉 string 타입에 unknown 타입의 변수가 들어갈수 없다
  5. Union 타입은 새로운 Union 타입이다. 즉 (string | number) 은 연산이 불가능하다
  6. 보통 any 나 unknown 을 부여할 경우는 없다

- 함수에 타입지정하는 법 & void 타입 (function_example.ts)

  1. 함수의 파라미터 와 return 에 타입을 지정할수 있다
  2. void 는 공허함 이라는 뜻으로 return 이 없을때의 타입을 말한다
  3. 파라미터가 옵션인 경우 파라미터 뒤에 ? 를 붙인다
  4. 파라미터 와 return 에 union type 을 부여할수 있다
  5. Union 타입은 새로운 Union 타입이다. 즉 (string | number) 은 연산이 불가능하다

- 타입 확정하기 Narrowing & Assertion (narrowing_example.ts)

  1. Union type 의 경우에는 함수 내에서 if 조건을 주면서 소스를 작성하는게 Narrowing
  2. if 조건 안에 typeof 를 사용하여 Narrowing 한다. 비교는 꼭 문자열로 한다. 'number', 'string', 'boolean' 등등
  3. Assertion 은 정말 확실할때 아니면 사용하지 않는다

- 타입도 변수에 담아쓰세요 type 키워드 써서 & readonly (typeAliases_example.ts)

  1. union type 이 긴 경우에 union type 을 변수에 담을수있다
  2. 관습적으로 type 변수는 대문자로 시작하고, AnimalType 이런 식으로 뒤에 타입을 붙인다
  3. const 는 재할당을 막아주지만, const 로 선언한 object 내부의 값 재할당까지 막아주지는 않는다
  4. object 내부를 보호하기 위해 readonly 를 사용한다
  5. 속성중에 선택사항인 속성이 있다면 ? 를 붙여준다. ? 는 undefined 라는 타입도 가질수 있다 라는 뜻이다
  6. 변수로 만든 type 또한 | 로 union 시킬수 있다
  7. object type 은 & 로 extend(합치다) 할수있다
  8. type 키워드는 재정의가 불가능합니다.

- Literal Types로 만드는 const 변수 유사품 (as_const_example.ts)

  1. Literal Type 은 어떠한 변수가 미리 골라놓은 데이터만 가질수 있게 해준다. 특정 글자나 숫자만 가질수 있게 제한을 두는것
  2. union type 으로 설정할수 있다
  3. 함수에도 똑같이 적용이 가능하다
  4. as const 문법

- 함수와 methods에 type alias 지정하는 법 (function_methods_example.ts)

  1. 함수 타입은 type FnType = () => {} 지정한다. 중괄호 안에 return 만 있다면 중괄호와 return 생략 가능하다
  2. 함수 type alias 를 사용하려면 변수에 함수를 담는 형식으로 사용한다.

- 타입스크립트로 HTML 변경과 조작할 때 주의점

  1. querySelector 로 불러온 변수를 가지고 narrowing 해서 변경한다
  2. a 태그는 HTMLAnchorElement, img 태그는 HTMLImageElement, h4 태그는 HTMLHeadingElement 다양한 타입명칭이 있는데 자동완성이 잘되는편이다
  3. optional chaining 문법을 사용한다. object?.~~ object 가 있으면 뽑아주고, 없다면 undefined 를 남겨놓는다.

- prototype 문법 짚어보기

  1. prototype 은 부모의 속성이고, class 나 function 안에 선언한 this.~~ 들은 자식도 속성으로 가지고 태어난다
  2. object 에서 속성을 뽑을때 본인이 가지고있는지 없다면? 부모가 가지고있는지 이런식으로 속성을 찾아온다
  3. 예를들면 array 에 array.sort() 를 사용할수 있는이유도 같은이유다. var array = new Array(4,2,1); 이런식으로 선언하기에 Array Class 에 sort가 있는것, 검증은 Array.prototype 을 console 에 때려보자

- class 만들 때 타입지정 가능 (class_example.ts)

  1. Class 내부의 필드값 과 constructor 는 같은 기능을 하지만, constructor 는 파라미터를 받아올수 있다
  2. Typescript 의 constructor 는 constructor 위에서 변수를 미리 선언해야한다
  3. Class 내부의 필드값에도 type 지정이 가능하다
  4. constructor 파라미터에도 type 지정이 가능하다
  5. Class 내부의 함수에도 type 지정이 가능하다

- Object에 타입지정하려면 interface 이것도 있음 (interface_example.ts)

  1. interface 는 유연하고, type 은 엄격하다
  2. 일반적으로 interface 는 extends 로 합치고, type alias 는 & 로 합친다
  3. interface 도 & 로 합칠수 있지만, type alias 는 extends 가 불가능하다
  4. interface 는 중복선언을 허용하며, 중복선언 시 extends 한것처럼 작동한다
  5. type alias 는 중복선언을 허용하지 않는다
  6. 일반적으로 type alias 를 사용하면 되는데, 다른 사람이 내 코드를 많이 이용할것같으면 interface 로 유연하게 소스를 짜자
  7. object 내부 속성이 중복일땐 interface 와 type alias 전부 에러가 발생한다

- 함수 rest 파라미터, destructuring 할 때 타입지정 (rest_params_example.ts)

  1. 함수에 어떤 파라미터가 몇개 들어올지 미리 정의하기 어려운경우 (3개인제 100개인지) 파라미터 앞에 ... 을 붙여서 rest 파라미터로 만들어준다. rest 파라미터는 배열형태로 담겨있다
  2. rest 파라미터에 type 지정은 언제나 []로 오기때문에 어떤 [] 인지만 지정해주면 된다
  3. Spread operator 는 중괄호, 대괄호를 벗기는것으로 rest 파라미터와는 다른 의미이다
  4. object destructuring할 땐 변수이름을 속성이름과 맞춰주는게 편리하고 (안맞추면 더 복잡함), array destructuring할 땐 변수이름 마음대로 작명해도 된다
  5. rest 파라미터 말고 다른 파라미터가 또 있다면, rest 파라미터는 맨 뒤에만 사용 가능하다

- Narrowing 할 수 있는 방법 더 알아보기 (narrowing_example.ts)

  1. && 연산자 사용하기
  2. in 연산자로 object 자료 narrowing 이 가능하다
  3. class 로 생성된 object 라면 instanceof 로 narrowing 이 가능하다
  4. 논리적으로 이 타입인지 특정지을수 있으면 narrowing 으로 인정한다

- public, private 쓰는거 보니까 타입스크립트 귀여운편 (class_case_example.ts)

  1. public 속성 은 class 내부, 외부 어디서든 다 쓸수 있다
  2. private 속성 은 class 내부에서만 사용 및 수정 할수있다
  3. private 속성 을 class 외부에서 변경하려면, class 내부에 변경하는 함수를 만들어서 변경한다. 원본 데이터를 지키면서 코딩하는 방식 주로 react 개발할때 많이쓰는 방식이다

- class에서 사용가능한 protected, static 키워드 (class_case_example.ts)

  1. 비슷한 class 를 만들때는 extends 문법을 활용한다
  2. protected 속성은 extends 되어있는 class 내부에서 수정이 가능하다, private 속성은 오직 본인 class 에서만 사용, 수정이 가능하다. private 의 확장판이라고 생각하면 된다. 자식들에게선 수정 불가능하다
  3. static 은 class 내부에 작성하는 메모같은 것이다. class 외부에서 변경할수 있다. 보통은 private 를 같이 사용해서 수정함수를 만들어서 수정한다. static 속성은 Class명.속성명(User.x 이런식) 으로 사용, 수정한다

- 타입도 import export 해서 씁니다 그리고 namespace (namespace_example.ts)

  1. export 는 다른곳에서도 쓸수있게하는것, import 는 export 를 가져다 쓰는것
  2. 원하는 것만 import 할땐 {} 안에 명칭을 맞춰서 가지고오고, as 로 명칭 변경이 가능하다
  3. type 중복이 많다면 namespace 로 한번 더 감싸주어 사용한다

- 타입을 파라미터로 입력하는 Generic

  1. Generic <> 을 사용하여 함수에 type 을 파라미터로 넣을수 있다
  2. extends 키워드로 넣을수 있는 type 을 제한할수 잇다
  3. Class 에도 사용이 가능하다
  4. Generic <> 은 type 용 파라미터 라고 생각하면 된다
  5. 타입파라미터는 자유작명가능 보통 <T> 이런걸로 많이 합니다
  6. { 속성 } 을 extends 하는것과 number, string 등등 type 을 extends 하는것은 다르다

- React + TypeScript 사용할 때 알아야할 점

  1. npx create-react-app 프로젝트명 --template typescript -> 새로운 프로젝트 만들때
  2. npm install --save typescript @types/node @types/react @types/react-dom @types/jest -> 기존 프로젝트에 타입스크립트 더할 때
  3. 일반 변수, 함수 타입지정
  4. JSX 타입 지정 -> JSX.Element
  5. function component 타입지정 -> return type 은 JSX.Element, 파라미터는 props 형식에 따라 type 지정
  6. state 문법 사용시 타입지정 -> useState 함수앞에 <> (흔치 않은 경우)

- array 자료에 붙일 수 있는 tuple type(tuple_type_example.ts)

  1. tuple type 은 array 에 붙일수 있는 타입이고, 자료의 위치까지 정확히 지정하는 타입이다
  2. [] 안에 차례로 세부 타입을 기입하면, 그 순서와 type 에 맞지 않으면 에러가 난다
  3. tuple type 안에서도 옵션(?) 설정이 가능하다. 하지만 배열의 맨 뒤에서 부터 사용이 가능하다

- 외부 파일 이용시 declare & 이상한 특징인 ambient module

  1. 외부 js 파일에 있는 변수 함수를 ts 에서 사용할때 declare 로 재정의 해준 후 사용해야한다
  2. 모든 ts 파일은 ambient module (글로벌 모듈) 이다. 즉 모든 변수, 함수를 모든 ts 파일에서 사용할수 있다
  3. 글로벌 모듈이 싫다면 최상단에 import 나 export 를 하나만 추가하면 로컬모듈이 된다
  4. 로컬모듈 내에 글로벌 변수를 만들고싶다면 declare global{} 안에 적으면 된다

- d.ts 파일 이용하기

  1. d.ts 는 타입 정의만 넣을수 있다. 함수는 불가능
  2. 정의해둔 타입은 export 해서 사용해야한다. d.ts 는 기본적으로 로컬모듈
  3. d.ts 파일을 레퍼런스용으로 사용하려면 tsconfig.json 에 "declaration": true 를 추가해준다
  4. 유명한 JavaScript 라이브러리들은 d.ts 를 제공하고있으니 찾아서 사용하면 된다
