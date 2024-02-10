import assert from 'assert';

// eslint-disable-next-line no-unused-vars
import Node from './Node.js';
import _setNext from './_setNext.js';
import _shift from './_shift.js';
import isNonEmpty from './isNonEmpty.js';
import unshift from './unshift.js';

/**
 * Inserts value just after input node (cannot be null).
 *
 * @param {Node} x Input node (cannot be null).
 * @param {any} value
 */
export default function _insertAfter(x, value) {
	assert(isNonEmpty(x));
	_setNext(x, unshift(_shift(x), value));
}
