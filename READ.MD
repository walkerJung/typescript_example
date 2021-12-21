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
  3. any 타입은 모든 타입을 다 사용한다. any는 type을 파괴한다고 생각하면 된다. 즉 string 타입에 any 타입의 변수가 들어갈수 있다.
  4. unknown 타입은 모든 타입을 다 사용할수 있지만, unknown 타입이다. 즉 string 타입에 unknown 타입의 변수가 들어갈수 없다.
  5. Union 타입은 새로운 Union 타입이다. 즉 (string | number) 은 연산이 불가능하다
  6. 보통 any 나 unknown 을 부여할 경우는 없다.
