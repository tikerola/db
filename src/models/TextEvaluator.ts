/* 
	Types 
*/

type TextLength = {
	withSpaces: number;
	withoutSpaces: number;
};

type CharacterCount = { [key: string]: number }[];

type Response = {
	textLength: TextLength;
	wordCount: number;
	characterCount: CharacterCount;
};

/* 
	Class TextEvaluator takes care of processing and serializing the text 
*/

export class TextEvaluator {
	private textLength: TextLength;
	private wordCount: number;
	private characterCount: CharacterCount;

	constructor(text: string) {
		this.textLength = this.extractTextLength(text);
		this.wordCount = this.extractWordCount(text);
		this.characterCount = this.extractCharacterCount(text);
	}

	extractTextLength(text: string): TextLength {
		return {
			withSpaces: text.length,
			withoutSpaces: this.removeWhitespace(text).length
		};
	}

	extractWordCount(text: string): number {
		return text.trim().split(' ').length;
	}

	extractCharacterCount(text: string): CharacterCount {
		const letterFrequencyObject: { [key: string]: number } = {};
		const letterFrequencyArray: { [key: string]: number }[] = [];

		// Let's construct frequency object --> { a: 3, d: 7, ...}

		for (let letter of text) {
			if (letter.match(/[a-z]/)) letterFrequencyObject[letter] = (letterFrequencyObject[letter] || 0) + 1;
		}

		// Let's go through the object and make an array of object properties and values

		for (let letter in letterFrequencyObject) {
			letterFrequencyArray.push({ [letter]: letterFrequencyObject[letter] });
		}

		// Return an array sorted by object keys

		return letterFrequencyArray.sort((a, b) => Object.keys(a)[0].charCodeAt(0) - Object.keys(b)[0].charCodeAt(0));
	}

	/* 
		This is what we want to respond from our api
	*/

	serializeResponse(): Response {
		return {
			textLength: this.textLength,
			wordCount: this.wordCount,
			characterCount: this.characterCount
		};
	}

	removeWhitespace(text: string): string {
		return text.replace(/\s/g, '');
	}
}
