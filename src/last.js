// eslint-disable-next-line no-unused-vars
import Node from './Node.js';
import _last from './_last.js';
import isEmpty from './isEmpty.js';

/**
 * Return the last node of an input list. Throws if input list is empty.
 *
 * @param {Node} x First node of the input list.
 * @return {Node} Last node of the input list.
 */
export default function last(x) {
	if (isEmpty(x)) throw new Error('input list is empty');
	return _last(x);
}
