let result;
const averageGrade = 97;

switch (true) {
	case 0 < averageGrade && averageGrade < 60:
		result = 'Незадовільно';
		break;

	case 60 <= averageGrade && averageGrade <= 70:
		result = 'Задовільно';
		break;

	case 71 <= averageGrade && averageGrade <= 80:
		result = 'Добре';
		break;

	case 81 <= averageGrade && averageGrade <= 90:
		result = 'Дуже добре';
		break;

	case 91 <= averageGrade && averageGrade <= 100:
		result = 'Відмінно';
		break;

	default:
		console.log('Ти не проходив тест!');
}

console.log(result);
