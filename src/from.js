// eslint-disable-next-line no-unused-vars
import Node from './Node.js';
import _setNext from './_setNext.js';
import empty from './empty.js';
import single from './single.js';

/**
 * Creates a list from an input iterable.
 *
 * @param {IterableIterator} iterable The input iterable.
 * @return {Node} First node of the newly created list (or null if empty list).
 */
export default function from(iterable) {
	const it = iterable[Symbol.iterator]();
	const event = it.next();

	if (event.done) return empty();

	const first = single(event.value);
	let last = first;

	for (const value of it) {
		const next = single(value);
		_setNext(last, next);
		last = next;
	}

	return first;
}
