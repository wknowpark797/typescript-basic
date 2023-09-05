// Generic 사용

/*
  [ generic ]
  타입의 적용을 정의할 때 하는것이 아닌 호출할 때 적용
  사용이유
    - 들어오게 되는 타입이 다양할 때 활용
*/

const getLength = <type>(arr: type[]) => {
	return arr.length;
};

const arr2 = [1, 2, 3];
const arr3 = ['red', 'green', 'blue'];
const arr4 = [1, '2', 3];

// 호출할 때 타입 지정
getLength<number>(arr2);
getLength<string>(arr3);
getLength<number | string>(arr4);
