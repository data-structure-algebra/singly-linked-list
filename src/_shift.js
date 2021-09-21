import assert from 'assert';

// eslint-disable-next-line no-unused-vars
import Node from './Node.js';
import isNonEmpty from './isNonEmpty.js';

/**
 * Removes first {@link Node} from a non-empty list.
 *
 * @param {Node} x First node (not null).
 * @return {Node} New list (possibly empty).
 */
export default function _shift(x) {
	assert(isNonEmpty(x));
	return x._next;
}
