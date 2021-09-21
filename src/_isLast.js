import assert from 'assert';

// eslint-disable-next-line no-unused-vars
import Node from './Node.js';
import isEmpty from './isEmpty.js';
import isNonEmpty from './isNonEmpty.js';
import _shift from './_shift.js';

/**
 * _isLast.
 *
 * @param {Node} x
 * @return {boolean}
 */
export default function _isLast(x) {
	assert(isNonEmpty(x));
	return isEmpty(_shift(x));
}
