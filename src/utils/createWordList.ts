import { IWordObject } from 'data/wordLists';
import { generateWord } from 'utils/generateWord.ts';
import { IBasic } from 'data/wordLists/basic.ts';

export const createWordList = (initialArr: IWordObject[] | IBasic[]): IWordObject[] => {
	const newWords: string[] = [];

	while (newWords.length < initialArr.length) {
		const generatedWord = generateWord(3);
		if (!newWords.includes(generatedWord))
			newWords.push(generatedWord);
	}

	const final: IWordObject[] = newWords.map((word, i) => {
		const finalWord: string = initialArr[i].pos === 'adjective' && (word.match(/-/g) || []).length > 1 ? word.slice(0, -1) : initialArr[i].pos === 'adjective' ? `${word}t` : word;
		if ('definition' in initialArr[i] && 'translation' in initialArr[i])
			return ({
				...initialArr[i],
				word: finalWord,
			});
		else return ({
			...initialArr[i],
			word: finalWord,
			definition: '',
			translation: initialArr[i].word,
		});
	});


	return final;
};