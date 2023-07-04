/**
* Retrieves ids from a list of students.
* @param {{
*   id: Number,
*   firstName: String,
*   location: String
* }[]} students - The list of students.
* @author Hanan Hussein <https://github.com/Hanan-Hussein>
* @returns
*/
export default function getListStudentIds(students) {

  let allId = []
  if (Array.isArray(students)) {
    students.map((std) => {
	allId.push(std.id)
	})
  }
  else {
    allId = []
  }
  return allId
}
