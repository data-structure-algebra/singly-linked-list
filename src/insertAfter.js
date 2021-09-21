import assert from 'assert';

// eslint-disable-next-line no-unused-vars
import Node from './Node.js';
import isNonEmpty from './isNonEmpty.js';
import isEmpty from './isEmpty.js';
import _insertAfter from './_insertAfter.js';

/**
 * Inserts value just after input node. Throws if input list is empty
 *
 * @param {Node} x Input node.
 * @param {any} value
 */
export default function insertAfter(x, value) {
	if (isEmpty(x)) throw new Error('input list is empty');
	assert(isNonEmpty(x));
	_insertAfter(x, value);
}
