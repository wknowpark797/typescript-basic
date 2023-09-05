// 함수 타입

/*
  함수의 리턴값에 타입을 지정하면 비효율적인 이유
  1. 이미 리턴된 값이기 때문에 타입오류가 뜨더라도 할 수 있는 작업이 없다.
  2. 에러가 호출단이 아닌 함수정의단에서 리턴되는 시점에 발생하기 때문에 호출시 오류파악이 힘들다.
*/

// 공통된 함수의 구조는 동일한 인터페이스 적용 가능
interface Calc {
	(n1: number, n2: number): any; // any: 어떤값이 들어오더라도 허용하는 타입 (호출단에서 에러를 발견하기 위해 사용)
}

const plus: Calc = (n1, n2) => {
	return n1 + n2;
};
const minus: Calc = (n1, n2) => {
	return n1 - n2;
};
const multiply: Calc = (n1, n2) => {
	return n1 * n2;
};
const divider: Calc = (n1, n2) => {
	return n1 / n2;
};

// union타입: 복수개의 타입 허용
const info = (num: number | string) => {
	console.log(`${num}번째 방문자입니다.`);
};
info('3');

const test4 = (n1: number, n2: number, n3?: number) => {
	// ||의 사용은 falsy 값이 들어오면 어떤것이든 대체값 적용
	// ?? null, undefined 값이 들어올 때만 대체값 적용
	// 잘못된 값이 아닌 들어오는 값이 없을 때 대체값을 넣을 때에는 ?? 연산자 활용
	const result = n1 + n2 + (n3 ?? 0);
	return result;
};
test4(1, 2);

// 동일한 타입의 파라미터를 여러개 받을 경우 (범용적 사용)
const test5 = (...nums: number[]) => {
	return nums.reduce((acc, cur) => acc + cur, 0);
};
test5(1, 2, 3, 4, 5);
