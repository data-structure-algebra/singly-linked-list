import assert from 'assert';

// eslint-disable-next-line no-unused-vars
import Node from './Node.js';
import _len from './_len.js';
import isEmpty from './isEmpty.js';
import isList from './isList.js';

/**
 * Compute the length of a list (can be empty).
 *
 * @param {Node} x First node of the input list.
 * @return {number} The length of the input list.
 */
export default function len(x) {
	assert(isList(x));
	return isEmpty(x) ? 0 : _len(x);
}
