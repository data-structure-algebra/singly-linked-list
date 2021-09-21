import empty from './empty.js';

/**
 * Return whether the input is a list and is empty.
 *
 * @param {any} x Input.
 * @return {boolean} True iff the input is an empty list.
 */
export default function isEmpty(x) {
	return x === empty();
}
