import assert from 'assert';

// eslint-disable-next-line no-unused-vars
import Node from './Node.js';
import isNonEmpty from './isNonEmpty.js';
import _isLast from './_isLast.js';
import _shift from './_shift.js';

/**
 * Return the last node of a non-empty input list.
 *
 * @param {Node} x First node of the input list.
 * @return {Node} Last node of the input list.
 */
export default function _last(x) {
	assert(isNonEmpty(x));
	while (!_isLast(x)) {
		x = _shift(x);
	}

	return x;
}
