const plus = (n1, n2) => {
    return n1 + n2;
};
const result = plus(2, 3);
console.log(result);
/*
  ts파일을 일반 js파일로 컴파일해야 한다.
  - tsc -w 변환활파일명.ts
  - tsc -w 변환할파일명.ts --target es6
*/
