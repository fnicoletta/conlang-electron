import { randomArrItem, randomIntFromInterval, accentVowel, TVowel } from '.';
import { consonants, vowels } from 'data/phonemes';


export function generateWord(maxSyllables: number): string {
	let word = '';
	const syllableCount = randomIntFromInterval(1, maxSyllables);

	for (let i = 0; i < syllableCount; i++) {
		const c = randomArrItem(consonants);
		const v = randomArrItem(vowels);
		if ((i === (syllableCount - 2)) || syllableCount === 1)
			word = `${word}-${c.letter}${accentVowel(v.letter as TVowel)}`;
		else
			word = `${word}-${c.letter}${v.letter}`;
	}

	return word;
}