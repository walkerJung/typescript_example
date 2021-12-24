let 유니온타입: number | string | boolean = 123;
let union배열: (number | string)[] = [1, "2", 3];
let union객체: { a: string | number } = { a: 2 };

let 애니: any;
let 언노운: unknown;

// 강의 마무리문제 타입 지정하기
// let user = 'kim';
// let age = undefined;
// let married = false;
// let 철수 = [user, age, married];
let user: string = "kim";
let age: undefined | number = undefined;
let married: boolean = false;
let 철수: (string | undefined | boolean | number)[] = [user, age, married];

// 강의 마무리문제 타입 지정하기
// let 학교 = {
//     score : [100, 97, 84],
//     teacher : 'Phil',
//     friend : 'John'
// }
// 학교.score[4] = false;
// 학교.friend = ['Lee' , 학교.teacher]
let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
