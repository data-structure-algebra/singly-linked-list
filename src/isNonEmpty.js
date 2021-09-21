import Node from './Node.js';

/**
 * Return whether the input is a list and is non-empty.
 *
 * @param {any} x Input.
 * @return {boolean} True iff the input is a non-empty list.
 */
export default function isNonEmpty(x) {
	return x instanceof Node;
}
