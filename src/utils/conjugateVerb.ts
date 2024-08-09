export type TTense = 'distant past' | 'past' | 'present' | 'future' | 'distant future';

export function conjugateVerb(word: string, tense: TTense, isContinuous: boolean, isPerfect: boolean, isInfinitive: boolean): string {
	if (isInfinitive) return `${word}te`;

	const tenseAspect = `${tense}${isContinuous ? ' continuous' : ''}`;
	let conjugatedWord = '';

	switch (tenseAspect) {
		case 'distant past':
			conjugatedWord = `${word}tje`;
			break;
		case 'distant past continuous':
			conjugatedWord = `${word}ton`;
			break;
		case 'past':
			conjugatedWord = `${word}t`;
			break;
		case 'past continuous':
			conjugatedWord = `${word}ti`;
			break;
		case 'present':
			conjugatedWord = `${word}`;
			break;
		case 'present continuous':
			conjugatedWord = `${word}n`;
			break;
		case 'future':
			conjugatedWord = `${word}l`;
			break;
		case 'future continuous':
			conjugatedWord = `${word}li`;
			break;
		case 'distant future':
			conjugatedWord = `${word}lo`;
			break;
		case 'distant future continuous':
			conjugatedWord = `${word}lon`;
			break;
	}

	if (isPerfect) conjugatedWord = `ka${conjugatedWord}`;

	return conjugatedWord;
}