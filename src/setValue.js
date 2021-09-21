import assert from 'assert';

// eslint-disable-next-line no-unused-vars
import Node from './Node.js';
import isEmpty from './isEmpty.js';
import isNonEmpty from './isNonEmpty.js';
import _setValue from './_setValue.js';

/**
 * Set value held by input node. Throws an error if the node is null.
 *
 * @param {Node} x Input node.
 * @param {any} value
 */
export default function setValue(x, value) {
	if (isEmpty(x)) throw new Error('input list is empty');
	assert(isNonEmpty(x));
	return _setValue(x, value);
}
