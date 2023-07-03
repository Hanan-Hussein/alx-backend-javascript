export function getListStudentIds(students) {

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
