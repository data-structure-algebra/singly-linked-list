import isEmpty from './isEmpty.js';
import isNonEmpty from './isNonEmpty.js';

/**
 * Return whether the input is a list.
 *
 * @param {any} x Input.
 * @return {boolean} True iff the input is a list.
 */
export default function isList(x) {
	return isEmpty(x) || isNonEmpty(x);
}
