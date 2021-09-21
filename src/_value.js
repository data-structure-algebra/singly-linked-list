import assert from 'assert';

// eslint-disable-next-line no-unused-vars
import Node from './Node.js';
import isNonEmpty from './isNonEmpty.js';

/**
 * Return the first value held by a non-empty list.
 *
 * @param {Node} x First node.
 * @return {any}
 */
export default function value(x) {
	assert(isNonEmpty(x));
	return x._value;
}
