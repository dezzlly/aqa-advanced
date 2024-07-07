const handleEven = () => console.log('Number is even');
const handleOdd = () => console.log('Number is odd');

const handleNum = (num, callback, callback1) => {
	if (num % 2 === 0) {
		callback();
		return;
	}
	callback1();
};

handleNum(3, handleEven, handleOdd);
handleNum(8, handleEven, handleOdd);
