import assert from 'assert';

// eslint-disable-next-line no-unused-vars
import Node from './Node.js';
import isEmpty from './isEmpty.js';
import isList from './isList.js';
import _isLast from './_isLast.js';

/**
 * Test whether input node is the last node of its list.
 *
 * @param {Node} x Input node (may be null).
 * @return {boolean} True iff input node is last node of the list.
 */
export default function isLast(x) {
	assert(isList(x));
	return !isEmpty(x) && _isLast(x);
}
