/**
 * Retrieves the sum of ids of a list of students.
 * @param {{
*   id: Number,
*   firstName: String,
*   location: String
* }[]} students - The list of students.
* @author Hanan Hussein <https://github.com/Hanan-Hussein>
* @returns {Number}
*/
export default function getStudentIdsSum(students) {
   return students.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0)
}
