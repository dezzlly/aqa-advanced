const averageGrade = 97;

if(0 < averageGrade && averageGrade < 60) {
    console.log("Незадовільно")
} else if(60 <= averageGrade && averageGrade <= 70) {
    console.log("Задовільно")
} else if(71 <= averageGrade && averageGrade <= 80) {
    console.log("Добре")
} else if(81 <= averageGrade && averageGrade <= 90) {
    console.log("Дуже добре")
} else if(91 <= averageGrade && averageGrade <= 100) {
    console.log("Відмінно")
} else {
    console.log("Ти не проходив тест!")
}