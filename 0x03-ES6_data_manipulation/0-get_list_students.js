function getListStudents() {
    let students = new Map()
    students.set({ id: 1, firstName: 'Guillaume', location: 'San Francisco' })
    students.set({ id: 2, firstName: 'James', location: 'Columbia' })
    students.set({ id: 5, firstName: 'Serena', location: 'San Francisco' })

    console.log(students);
}
// getListStudents()