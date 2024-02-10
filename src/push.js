import assert from 'assert';

// eslint-disable-next-line no-unused-vars
import Node from './Node.js';
import concat from './concat.js';
import isList from './isList.js';
import single from './single.js';

/**
 * Push value to list.
 *
 * @param {Node} x First node of first input list (can be null).
 * @param {any} value Value to push.
 * @return {Node} The node at the front of the list (new node if empty, input
 * node otherwise).
 */
export default function push(x, value) {
	assert(isList(x));
	return concat(x, single(value));
}
