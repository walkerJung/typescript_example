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
