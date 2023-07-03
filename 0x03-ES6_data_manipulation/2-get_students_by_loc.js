export function getStudentsByLocation(students, loct) {

    return students.filter(std => loct == std.location)

}
