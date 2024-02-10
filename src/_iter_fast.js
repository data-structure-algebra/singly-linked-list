import assert from 'assert';

// eslint-disable-next-line no-unused-vars
import Node from './Node.js';
import _shift from './_shift.js';
import isEmpty from './isEmpty.js';
import isNonEmpty from './isNonEmpty.js';

/**
 * Generator of nodes in list in order. The list cannot be empty. You should
 * not modify the current node's next pointer unless you know what you are
 * doing.
 *
 * /!\ Modifying the next pointer of the current node will change which node
 * comes next in the iteration.
 *
 * @param {Node} first First node of the list.
 * @return {IterableIterator<Node>} Yields nodes of a list in order.
 */
export default function* _iter_fast(first) {
	assert(isNonEmpty(first));
	let next = first;

	do {
		yield next;
		next = _shift(next);
	} while (!isEmpty(next));
}
