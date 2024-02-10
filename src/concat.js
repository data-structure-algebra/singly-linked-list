import assert from 'assert';

// eslint-disable-next-line no-unused-vars
import Node from './Node.js';
import _last from './_last.js';
import _setNext from './_setNext.js';
import isEmpty from './isEmpty.js';
import isNonEmpty from './isNonEmpty.js';

/**
 * Concatenate two input lists.
 *
 * @param {Node} x First node of first input list (can empty).
 * @param {Node} y First node of second input list (can empty).
 * @return {Node} First node of the output list (or an empty list).
 */
export default function concat(x, y) {
	if (isEmpty(x)) return y;
	assert(isNonEmpty(x));
	if (isEmpty(y)) return x;
	assert(isNonEmpty(y));
	_setNext(_last(x), y);
	return x;
}
