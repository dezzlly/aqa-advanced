function divide(numerator, denominator) {
	if (denominator !== 0 && typeof denominator === 'number' && typeof numerator === 'number') {
		return numerator / denominator;
	}

	throw new Error(`It can't be processed`);
}

function checkResult(numerator, denominator, callback) {
	try {
		const result = callback(numerator, denominator);
		console.log(`Result is`, result);
	} catch (error) {
		console.log('Error:', error.message);
	} finally {
		console.log(`Calculation completed`);
	}
}

checkResult(10, 2, divide);
checkResult(10, '2', divide);
checkResult(10, 0, divide);
checkResult('10', '2', divide);
checkResult('10', 2, divide);
