import assert from 'assert';

// eslint-disable-next-line no-unused-vars
import Node from './Node.js';
import _shift from './_shift.js';
import isEmpty from './isEmpty.js';
import isNonEmpty from './isNonEmpty.js';

/**
 * Removes first {@link Node} from a list. Throws if input list is empty.
 *
 * @param {Node} x First node of a non-empty list.
 * @return {[Node, Node]} New list (possibly empty) and removed node.
 */
export default function shift(x) {
	if (isEmpty(x)) throw new Error('input list is empty');
	assert(isNonEmpty(x));
	return [_shift(x), x];
}
