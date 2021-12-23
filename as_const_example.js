/*
    as const는 효과가 2개인데

    1. 타입을 object의 value로 바꿔줍니다. (타입을 'kim'으로 바꿔줍니다)
    2. object안에 있는 모든 속성을 readonly로 바꿔줍니다 (변경하면 에러나게)
*/
var 자료 = {
    name: "kim",
};
function 내함수(a) { }
내함수(자료.name);
