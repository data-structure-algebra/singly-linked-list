import test from 'ava';

import {list} from '@iterable-iterator/list';
import {range} from '@iterable-iterator/range';

import {str} from './_fixtures.js';

import {from, pop, last, value, values} from '#module';

function throws(t, array) {
	const node = from(array);
	t.is(null, node);
	t.throws(() => pop(node), {message: /empty/});
}

throws.title = (title, array) => title || `pop(${str(array)}) ~> throws`;

function macro(t, array) {
	const node = from(array);
	const expected = last(node);
	const [after, popped] = pop(node);
	t.is(array.at(-1), value(popped));
	t.is(popped, expected);
	const result = list(values(after));
	t.deepEqual(array.slice(0, -1), result);
}

macro.title = (title, array) =>
	title || `pop(${str(array)}) ~> ${array.at(-1)}`;

test(throws, []);
test(macro, [27]);
test(macro, list(range(50)));
test(macro, list(range(10_000)));
