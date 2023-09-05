type Grade = 12 | 15 | 18;
type Genre = 'drama' | 'adventure' | 'horror' | 'romance' | 'animation' | 'thriller';

interface Movie {
	title: string;
	grade: Grade;
	genre: Genre;
	isSubtitle: boolean;
	vid?: string;
}

const recipe: string[] = ['pie', 'cake', 'sandwitch'];

const movieData: Movie[] = [
	{
		title: 'Title 01',
		grade: 15,
		genre: 'adventure',
		isSubtitle: true,
		vid: 'url',
	},
	{
		title: 'Title 02',
		grade: 18,
		genre: 'thriller',
		isSubtitle: true,
	},
	{
		title: 'Title 03',
		grade: 12,
		genre: 'animation',
		isSubtitle: false,
		vid: 'url',
	},
];

const createList = <type>(data: type[] | type) => {
	console.log(data);
	// return JSX
};

createList<Movie>(movieData);
createList<string>(recipe);
createList('string');
createList(2);
