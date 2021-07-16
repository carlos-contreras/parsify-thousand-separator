'use strict';

/*
	This is the main function you want to export.
	You can add options for customization (in this case `upperCase`).
	It receives the expression, which you need to validate and either do something with it or return the original expression.
*/

module.exports = _ /* Options */ => async expression => {
	const DEFAULT_SEPARATOR = ',';
	const separatorMatches = process.env.THOUSAND_SEPARATOR && process.env.THOUSAND_SEPARATOR.match(/\W|_/);
	const thousandSeparator = separatorMatches ? separatorMatches[0] : DEFAULT_SEPARATOR;
	const findNumbersRegex = new RegExp(`\\d{1,3}(?:${thousandSeparator}\\d{3})+`, 'g');
	const replaceRegex = new RegExp(`${thousandSeparator}`, 'g');
	const mappings = [];
	let numberMatches = findNumbersRegex.exec(expression);

	while (numberMatches) {
		mappings.push([numberMatches[0], numberMatches[0].replace(replaceRegex, '')]);
		numberMatches = findNumbersRegex.exec(expression);
	}

	mappings.forEach(pair => {
		expression = expression.replace(pair[0], pair[1]);
	});

	return expression;
};
