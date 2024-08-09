import { TVowel } from '.';

export function accentVowel(vowel: TVowel): string {
	let newVowel: string;

	switch (vowel) {
		case 'a':
			newVowel = '\xE0';
			break;
		case 'e':
			newVowel = '\xE8';
			break;
		case 'i':
			newVowel = '\xEC';
			break;
		case 'o':
			newVowel = '\xF2';
			break;
		case 'u':
			newVowel = '\xF9';
			break;
	}
	return newVowel;
}