import assert from 'assert';

// eslint-disable-next-line no-unused-vars
import Node from './Node.js';
import _iter from './_iter.js';
import isEmpty from './isEmpty.js';
import isList from './isList.js';

/**
 * Generator of nodes in list in order.
 *
 * @param {Node} first First node of the list (can be null).
 * @return {IterableIterator<Node>}
 */
export default function* iter(first) {
	assert(isList(first));
	if (!isEmpty(first)) yield* _iter(first);
}
