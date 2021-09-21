import test from 'ava';

import {list} from '@iterable-iterator/list';

import {
	empty,
	from,
	push,
	pop,
	shift,
	unshift,
	concat,
	last,
	isLast,
	value,
	setValue,
	values,
	insertAfter,
} from '../../src/index.js';

const toArray = (first) => list(values(first));

test('API', (t) => {
	let A = empty();

	t.deepEqual(toArray(A), []);

	t.throws(() => pop(A), {message: /empty/});
	t.throws(() => shift(A), {message: /empty/});
	t.throws(() => value(A), {message: /empty/});
	t.throws(() => setValue(A, {}), {message: /empty/});
	t.throws(() => insertAfter(A, {}), {message: /empty/});
	t.throws(() => last(A), {message: /empty/});

	t.false(isLast(A));

	A = push(A, 1);

	t.true(isLast(A));
	t.true(isLast(last(A)));

	t.deepEqual(toArray(A), [1]);
	setValue(A, 0);
	t.deepEqual(toArray(A), [0]);
	setValue(A, 1);
	t.deepEqual(toArray(A), [1]);

	A = unshift(A, 2);

	t.deepEqual(toArray(A), [2, 1]);

	let B = from([4, 3]);

	t.deepEqual(toArray(B), [4, 3]);

	B = concat(A, B);
	A = empty();

	t.deepEqual(toArray(B), [2, 1, 4, 3]);
	t.deepEqual(toArray(A), []);

	B = concat(A, B);
	t.deepEqual(toArray(B), [2, 1, 4, 3]);

	B = concat(B, A);
	t.deepEqual(toArray(B), [2, 1, 4, 3]);

	A = unshift(A, 8);
	t.deepEqual(toArray(A), [8]);
	B = push(B, 7);
	t.deepEqual(toArray(B), [2, 1, 4, 3, 7]);

	A = concat(A, B);
	B = empty();

	t.deepEqual(toArray(A), [8, 2, 1, 4, 3, 7]);
	t.deepEqual(toArray(B), []);

	insertAfter(A, 9);
	t.deepEqual(toArray(A), [8, 9, 2, 1, 4, 3, 7]);
	insertAfter(last(A), 5);
	t.deepEqual(toArray(A), [8, 9, 2, 1, 4, 3, 7, 5]);
});
