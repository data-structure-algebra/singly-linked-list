import assert from 'assert';

// eslint-disable-next-line no-unused-vars
import Node from './Node.js';
import _isLast from './_isLast.js';
import _setNext from './_setNext.js';
import _shift from './_shift.js';
import empty from './empty.js';
import isNonEmpty from './isNonEmpty.js';

/**
 * Removes last {@link Node} from a non-empty list.
 *
 * @param {Node} x First node of input list (non-empty).
 * @return {[Node, Node]} New list (possibly empty) and removed node.
 */
export default function _pop(x) {
	assert(isNonEmpty(x));
	if (_isLast(x)) return [empty(), x];
	let penultimate = x;
	let last = _shift(x);
	while (!_isLast(last)) {
		penultimate = last;
		last = _shift(last);
	}

	_setNext(penultimate, empty());
	return [x, last];
}
