export function updateStudentGradeByCity(students, city, newGrades) {

    let updatedStd = []
    students.filter((std) => {
        if (std.location === city) {
            newGrades.map((grade) => {
                if (grade.studentId === std.id) {
                    std.grade = grade.grade
                }
                else {
                    std.grade == null ? std.grade = 'N/A' : std.grade

                }

            })
            updatedStd.push(std)
        }
    })
    return updatedStd
}
