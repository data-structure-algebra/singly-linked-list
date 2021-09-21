import assert from 'assert';

// eslint-disable-next-line no-unused-vars
import Node from './Node.js';
import isNonEmpty from './isNonEmpty.js';

/**
 * Set value held by input node.
 *
 * @param {Node} x Input node (cannot be null).
 * @param {any} value
 */
export default function _setValue(x, value) {
	assert(isNonEmpty(x));
	x._value = value;
}
