import Node from './Node.js';

/**
 * Create a list containing a single element.
 *
 * @param {any} value Value of the element.
 * @return {Node} The node at the front of the list.
 */
export default function single(value) {
	return new Node(value);
}
