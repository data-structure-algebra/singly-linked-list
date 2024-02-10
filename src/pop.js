import assert from 'assert';

// eslint-disable-next-line no-unused-vars
import Node from './Node.js';
import _pop from './_pop.js';
import isEmpty from './isEmpty.js';
import isNonEmpty from './isNonEmpty.js';

/**
 * Removes last {@link Node} from a list. Throws if input list is empty.
 *
 * @param {Node} x First node of input list.
 * @return {[Node, Node]} New list (possibly empty) and removed node.
 */
export default function pop(x) {
	if (isEmpty(x)) throw new Error('input list is empty');
	assert(isNonEmpty(x));
	return _pop(x);
}
