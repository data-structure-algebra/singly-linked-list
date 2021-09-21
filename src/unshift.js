import assert from 'assert';

import Node from './Node.js';
import isList from './isList.js';

/**
 * Unshift value to list.
 *
 * @param {Node} x First node of first input list (can be null).
 * @param {any} value Value to unshift.
 * @return {Node} The node at the front of the list (hence, the new node).
 */
export default function unshift(x, value) {
	assert(isList(x));
	return new Node(value, x);
}
