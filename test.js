const test = require('ava');

const parsifyExamplePlugin = require('./src');

test('general', async t => {
	const input = 'hello_word + 10,000,000.00 - (9,000 * 8,857,857.00 * 9874782) / (14,857,478.36 + 52.36)';
	const output = 'hello_word + 10000000.00 - (9000 * 8857857.00 * 9874782) / (14857478.36 + 52.36)';
	t.is(await parsifyExamplePlugin()(input), output);
});

test('when separator is set', async t => {
	const input = 'hello_word + 10_000.00 + 6_000 * 145_789';
	const output = 'hello_word + 10000.00 + 6000 * 145789';
	process.env.THOUSAND_SEPARATOR = '_';
	t.is(await parsifyExamplePlugin()(input), output);
});

test('when there is no separator match', async t => {
	const input = 'hello_word + 10000.00';
	process.env.THOUSAND_SEPARATOR = '_';
	t.is(await parsifyExamplePlugin()(input), input);
});

test('when there is a separator not set correctly', async t => {
	const input = 'hello_word + 1000_0.00';
	process.env.THOUSAND_SEPARATOR = '_';
	t.is(await parsifyExamplePlugin()(input), input);
});

test('if an error occurs, just output the expression', async t => {
	t.is(await parsifyExamplePlugin()('foo / bar'), 'foo / bar');
});
