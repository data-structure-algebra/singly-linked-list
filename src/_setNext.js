import assert from 'assert';

// eslint-disable-next-line no-unused-vars
import Node from './Node.js';
import isList from './isList.js';
import isNonEmpty from './isNonEmpty.js';

/**
 * Replace successor of the input node.
 *
 * @param {Node} x Node to replace the sucessor of.
 * @param {Node} y New successor (possibly null).
 */
export default function _setNext(x, y) {
	assert(isNonEmpty(x));
	assert(isList(y));
	x._next = y;
}
