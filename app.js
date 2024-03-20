// Given a list of grades, calculate the average grade.
// A list of grades
var grades = [100, 88, 72, 90, 52, 67];
// Calculates the average grade
var averageGrade = grades.reduce(function (total, grade) { return total + grade; }, 0) / grades.length;
// Shows the average grade
console.log(averageGrade);
// First, we add up all the grades. Then, we divide by how many grades there are to get the average.
