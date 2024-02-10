import assert from 'assert';

// eslint-disable-next-line no-unused-vars
import Node from './Node.js';
import _shift from './_shift.js';
import isEmpty from './isEmpty.js';
import isNonEmpty from './isNonEmpty.js';

/**
 * Compute the length of a non-empty list.
 *
 * @param {Node} x First node of the input list.
 * @return {number} The length of the input list.
 */
export default function _len(x) {
	assert(isNonEmpty(x));
	let n = 1;
	let y = _shift(x);
	while (!isEmpty(y)) {
		++n;
		y = _shift(y);
	}

	return n;
}
