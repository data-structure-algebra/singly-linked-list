import assert from 'assert';

// eslint-disable-next-line no-unused-vars
import Node from './Node.js';
import _iter_fast from './_iter_fast.js';
import _value from './_value.js';
import isEmpty from './isEmpty.js';
import isList from './isList.js';

/**
 * Generator of nodes in list in order.
 *
 * @param {Node} first First node of the list (can be null).
 * @return {IterableIterator<any>}
 */
export default function* values(first) {
	assert(isList(first));
	if (!isEmpty(first)) {
		for (const x of _iter_fast(first)) yield _value(x);
	}
}
