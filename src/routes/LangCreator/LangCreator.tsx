import { $Container, $Table } from 'routes/LangCreator/LangCreator.styled.tsx';
import { useState } from 'react';
import { conjugateVerb, createWordList, evolveSound } from '@/utils';
import { basic, IWordObject } from 'data/wordLists';
import { saveData } from 'data/api/saveData.ts';

export interface ILangCreator {
	// langName?: string;
}

export interface IPhoneme {
	letter: string;
	sound: string;
	spelling: string;
}

function removeDash(word: string) {
	return word.replace(/-/g, '');
}

export default function LangCreator({}: ILangCreator) {
	const [lang, setLang] = useState<IWordObject[]>([]);
	const [translateText, setTranslateText] = useState(''); // for input
	const [translation, setTranslation] = useState(''); // for display

	const exampleVerbTranslation = 'think';
	const exampleVerb = lang.length ? removeDash(lang.filter(word => word.translation === exampleVerbTranslation)[0].word) : '';


	function handleGen() {
		setLang(createWordList(basic));
	}

	function handleSave() {
		saveData(lang, 'words');
	}

	function translateVerb(word: string, identifiers: string[]) {
		const isContinuous = (arr: string[]) => arr.includes('cont');
		const isPerfect = (arr: string[]) => arr.includes('prf');
		const isInfinitive = (arr: string[]) => arr.includes('inf');
		const tense = (arr: string[]) => {
			if (arr.includes('dpst')) return 'distant past';
			if (arr.includes('pst')) return 'past';
			if (arr.includes('fut')) return 'future';
			if (arr.includes('dfut')) return 'distant future';
			return 'present';
		};

		return conjugateVerb(removeDash(word), tense(identifiers), isContinuous(identifiers), isPerfect(identifiers), isInfinitive(identifiers));
	}

	function translateAdjective(word: string, identifiers: string[], ending: string) {
		const isAdv = (arr: string[]) => arr.includes('adv');

		if (isAdv(identifiers)) return `${removeDash(word)}oice`;
		else return `${removeDash(word)}${ending}`;
	}

	function handleTranslate() {
		const wordArr = translateText.trim().toLowerCase().split(' ');
		const translatedArr = wordArr.map((word) => {
			let identifiers: string[] = [];
			const translation = lang.filter((x) => {
				if (x.translation === word.split('.')[0]) {
					identifiers = word.split('.');
					return true;
				}
			});

			if (translation.length) {
				if (translation[0].pos === 'verb') return translateVerb(translation[0].word, identifiers);
				if (translation[0].pos === 'adjective') return translateAdjective(translation[0].word, identifiers, 'a');
				return removeDash(translation[0].word);
			}
			return evolveSound(word);
		});
		setTranslation(translatedArr.join(' '));
	}

	return (
		<$Container>

			<button onClick={handleGen}>Generate Words</button>
			<button onClick={handleSave}>Save</button>

			<input value={translateText} onChange={e => setTranslateText(e.target.value)} />
			<button onClick={handleTranslate}>translate</button>
			<h2>{translation}</h2>


			<$Table>
				<thead>
				<tr>
					<th>{exampleVerbTranslation}/{exampleVerb}</th>
					<th>Simple</th>
					<th>Continuous</th>
					<th>Perfect</th>
					<th>Perfect Continuous</th>
				</tr>
				</thead>
				<tbody>
				<tr>
					<th>Distant Past</th>
					<td>{exampleVerb}tje</td>
					<td>{exampleVerb}ton</td>
					<td>ka{exampleVerb}tje</td>
					<td>ka{exampleVerb}ton</td>
				</tr>
				<tr>
					<th>Past</th>
					<td>{exampleVerb}t</td>
					<td>{exampleVerb}ti</td>
					<td>ka{exampleVerb}t</td>
					<td>ka{exampleVerb}ti</td>
				</tr>
				<tr>
					<th>Present</th>
					<td>{exampleVerb}</td>
					<td>{exampleVerb}n</td>
					<td>ka{exampleVerb}</td>
					<td>ka{exampleVerb}n</td>
				</tr>
				<tr>
					<th>Future</th>
					<td>{exampleVerb}l</td>
					<td>{exampleVerb}li</td>
					<td>ka{exampleVerb}l</td>
					<td>ka{exampleVerb}li</td>
				</tr>
				<tr>
					<th>Distant Future</th>
					<td>{exampleVerb}lo</td>
					<td>{exampleVerb}lon</td>
					<td>ka{exampleVerb}lo</td>
					<td>ka{exampleVerb}lon</td>
				</tr>
				</tbody>
			</$Table>

			<$Table>
				<thead>
				<tr>
					<th>Word</th>
					<th>Part of Speech</th>
					<th>Definition</th>
					<th>English Translation</th>
				</tr>
				</thead>
				<tbody>
				{lang.map((word: IWordObject) => (
					<tr key={word.word + word.definition}>
						<td>{removeDash(word.word)}</td>
						<td>{word.pos}</td>
						<td>{word.definition || '_'}</td>
						<td>{word.translation || '_'}</td>
					</tr>
				))}
				</tbody>
			</$Table>

		</$Container>
	);
}