import assert from 'assert';

// eslint-disable-next-line no-unused-vars
import Node from './Node.js';
import isList from './isList.js';
import _setNext from './_setNext.js';
import single from './single.js';

/**
 * Unshift value to list.
 *
 * @param {Node} x First node of first input list (can be null).
 * @param {any} value Value to unshift.
 * @return {Node} The node at the front of the list (hence, the new node).
 */
export default function unshift(x, value) {
	assert(isList(x));
	const y = single(value);
	_setNext(y, x);
	return y;
}
