import { randomArrItem } from 'utils/randomArrItem.ts';

function volonize(letter: string): string {
	switch (letter) {
		case 'h':
			return 'x';
		case 'q':
			return 'kw';
		case 'x':
			return 'z';
		case 'y':
			return 'i';
		default:
			return letter;
	}

}

function volonizeDigraph(word: string): string {
	let newWord = word;

	newWord = newWord.replace(/sh/g, 'ç');
	newWord = newWord.replace(/ch/g, 'c');
	newWord = newWord.replace(/th/g, randomArrItem(['þ', 'ð']));

	return newWord;
}

export function evolveSound(word: string) {
	const splitWord = volonizeDigraph(word.toLowerCase()).split('');

	const volonizedArr = splitWord.map(letter => volonize(letter));

	return volonizedArr.join('');
}