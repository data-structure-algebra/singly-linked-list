import assert from 'assert';

// eslint-disable-next-line no-unused-vars
import Node from './Node.js';
import _shift from './_shift.js';
import isEmpty from './isEmpty.js';
import isNonEmpty from './isNonEmpty.js';

/**
 * Generator of nodes in list in order. You are allowed to edit the current
 * node.
 *
 * /!\ Modifying the next pointer of the current node will NOT change which
 * node comes next in the iteration.
 *
 * @param {Node} first First node of the list.
 * @return {IterableIterator<Node>} Yields nodes of a list in order.
 */
export default function* _iter(first) {
	assert(isNonEmpty(first));
	let next = first;

	do {
		const x = next;
		next = _shift(x); // Compute next before yielding.
		yield x; // Necessary ?
	} while (!isEmpty(next));
}
