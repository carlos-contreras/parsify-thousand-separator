/*
	This is the main function you want to export.
	You can add options for customization (in this case `upperCase`).
	It receives the expression, which you need to validate and either do something with it or return the original expression.
*/
module.exports = ({upperCase = false} = {}) => async expression => {
	// Validate the expression to see if it should be processed by your plugin
	if (expression === 'hello') {
		if (upperCase) {
			return 'HELLO WORLD!';
		}

		return 'hello world!';
	}

	// If the expression validation fails, just return the expression
	return expression;
};
