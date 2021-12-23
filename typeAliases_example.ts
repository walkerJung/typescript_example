/* union 타입 변수로 만들기 */
type AnimalType = string | number | undefined;
let 동물: AnimalType;

/* 객체 형식 타입 변수로 만들기 */
type PersonType = {
  name: string;
  age: number;
};

let teacher: PersonType = { name: "john", age: 20 };

/* const 는 재할당 불가 */
const 출생지역 = "seoul";
// 출생지역 = 'busan'; //const 변수는 여기서 에러남

/* const 는 재할당이 불가능하지만, object 내부의 변경까지는 관여하지 않는다. */
const 여친 = {
  name: "엠버",
};
여친.name = "유라"; //const 변수지만 에러안남

/* object 내부의 변경을 막기위해 readonly 사용 */
type Girlfriend = {
  readonly name: string;
};

let 여친2: Girlfriend = {
  name: "엠버",
};

// 여친2.name = '유라' //readonly라서 에러남

/* 속성이 선택사항이라면 ? 를 붙여준다 */
type Square = {
  color?: string;
  width: number;
};

let 네모2: Square = {
  width: 100,
};

/* type 키워드 여러개를 합칠 수 있습니다.  | 또는 & 로 extend 가능하다*/
type Name = string;
type Age = number;
type NewOne = Name | Age;

type PositionX = { x: number };
type PositionY = { y: number };
type XandY = PositionX & PositionY;
let 좌표: XandY = { x: 1, y: 2 };
