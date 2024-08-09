import { randomArrItem } from 'utils/randomArrItem.ts';
import { consonants, vowels } from 'data/phonemes';

export const generateSyllable = () => {
	const c = randomArrItem(consonants);
	const v = randomArrItem(vowels);
	return `${c.letter}${v.letter}`;
};