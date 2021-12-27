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

- Object에 타입지정하려면 interface 이것도 있음

  1. interface 는 유연하고, type 은 엄격하다
  2. 일반적으로 interface 는 extends 로 합치고, type alias 는 & 로 합친다
  3. interface 도 & 로 합칠수 있지만, type alias 는 extends 가 불가능하다
  4. interface 는 중복선언을 허용하며, 중복선언 시 extends 한것처럼 작동한다
  5. type alias 는 중복선언을 허용하지 않는다
  6. 일반적으로 type alias 를 사용하면 되는데, 다른 사람이 내 코드를 많이 이용할것같으면 interface 로 유연하게 소스를 짜자
  7. object 내부 속성이 중복일땐 interface 와 type alias 전부 에러가 발생한다

- 함수 rest 파라미터, destructuring 할 때 타입지정

  1. 함수에 어떤 파라미터가 몇개 들어올지 미리 정의하기 어려운경우 (3개인제 100개인지) 파라미터 앞에 ... 을 붙여서 rest 파라미터로 만들어준다. rest 파라미터는 배열형태로 담겨있다
  2. rest 파라미터에 type 지정은 언제나 []로 오기때문에 어떤 [] 인지만 지정해주면 된다
  3. Spread operator 는 중괄호, 대괄호를 벗기는것으로 rest 파라미터와는 다른 의미이다
  4. object destructuring할 땐 변수이름을 속성이름과 맞춰주는게 편리하고 (안맞추면 더 복잡함), array destructuring할 땐 변수이름 마음대로 작명해도 된다
  5.
