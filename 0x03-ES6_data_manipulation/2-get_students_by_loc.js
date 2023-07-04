/**
* Retrieves students in a given location.
* @param {{
*   id: Number,
*   firstName: String,
*   location: String
* }[]} students - The list of students.
* @param {String} loct - The location.
* @author Hanan Hussein <https://github.com/Hanan-Hussein>
* @returns
*/
export default function getStudentsByLocation(students, loct) {
  return students.filter(std => loct == std.location)
}
