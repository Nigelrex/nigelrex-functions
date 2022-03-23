interface Array<T> {
	/**
	 * Adds all numbers in the array
	 */
	addAll(): number;
	/**
	 * Checks if the array is empty
	 * @returns `boolean`
	 */
	isEmpty(): boolean;
	/**
	 * Better to use this instead of `Array.isArray(yourArray)`
	 */
	isArray(): boolean;
}
interface String {
	/**
	 * @param array objects with many strings to match with
	 * @returns a object with the closest matching string and the distance
	 */
	stringDistance(array: object): object;
	/**
	 * @returns a string with First Letter Caps
	 */
	toTitleCase(): string;
}
interface Date {
	/**
	 * Provides with a unix timestamp
	 */
	unix(): string
}
/**
 * Async await code anywhere in your code
 */
declare function asyncAwait(code: void): void;
/**
 * Delay your code before the next event
 */
declare function wait(delay: number, value: void): void;
/**
 * Delay your code before the next event
 */
declare function sleep(delay: number, value: void): void;

/**
 * @param text Input text you want to display before input
 * @param time Input the time needed to wait for the input from the user. Defaults to `5000` ms
 */
declare function input(
	text?: string,
	time?: number,
): string;

/**
 * Shows all hidden parameters when printed in console
 *
 * **Not recommended if the object is too big**
 */
declare function showAllParams(object: object): object;

/**
 * Get **random string** `12` and **includeSymbols** `true` by default
 */
declare function randomString(
	size: number,
	includeSymbols: boolean,
	chars: string,
	symbols: string,
): string;
