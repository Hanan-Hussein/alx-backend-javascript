/**
* Updates the grades of a list of students in a given city.
* @param {{
*   id: Number,
*   firstName: String,
*   location: String
* }[]} students - The list of students.
* @param {*} city - The city of students.
* @param {{
*   studentId: Number,
*   grade: Number,
* }[]} newGrades - The new grades to be given to a student.
* @author Hanan Hussein <https://github.com/Hanan-Hussein>
* @returns {{id: Number, firstName: String, location: String}[]}
*/
export default function updateStudentGradeByCity(students, city, newGrades) {
  let updatedStd = [];

  if (students instanceof Array) {
    students.filter((std) => {
        if (std.location === city) {
            newGrades.map((grade) => {
                if (grade.studentId === std.id) {
                    std.grade = grade.grade;
                }
                else {
                    std.grade == null ? std.grade = 'N/A' : std.grade;
                }
            })
            updatedStd.push(std);
        }
    })
}
return updatedStd;
}
