import assert from 'assert';

// eslint-disable-next-line no-unused-vars
import Node from './Node.js';
import _value from './_value.js';
import isEmpty from './isEmpty.js';
import isNonEmpty from './isNonEmpty.js';

/**
 * Return the first value held by a list. Throws if input list is empty.
 *
 * @param {Node} x First node.
 * @return {any}
 */
export default function value(x) {
	if (isEmpty(x)) throw new Error('input list is empty');
	assert(isNonEmpty(x));
	return _value(x);
}
