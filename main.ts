// 기본 타입
let test: string = 'hello';
let num: number = 0;
let isFemale: boolean = true;

// 참조형 타입
let like: string[] = ['game', 'music', 'movie'];
let dislike: Array<string> = ['study', 'homework'];
let odd: number[] = [1, 3, 5];
let even: Array<number> = [2, 4, 6];
let test2: boolean[] = [true, false, true];
let test3: Array<boolean> = [true, false, true];

// tuple: 배열에 들어가는 자료형이 다를 때 배열의 순서마다 타입 지정
let arr1: [number, string] = [3, '3'];

// 객체 타입
type Score = 'A' | 'B' | 'C' | 'D' | 'F'; // 정해진 특정값을 그룹으로 묶어 커스텀 타입 지정 가능

// interface: 자료의 구조가 복잡한 경우 타입을 커스터마이징하여 생성
interface Student {
	name: string;
	age: number;
	readonly isFemale: boolean; // 읽기 전용 (변경불가)
	address?: string; // 선택 옵션
	[grade: number]: Score; // 프로퍼티명을 산정할 수 없을 때 대괄호로 묶어 타입 지정
}
let student1: Student = {
	name: 'David',
	age: 20,
	isFemale: false,
	1: 'C',
};
let student2: Student = {
	name: 'Emily',
	age: 20,
	isFemale: true,
	address: 'Seoul',
	2: 'A',
};

student2['2'] = 'A';
// student2['2'] = 'Z';
