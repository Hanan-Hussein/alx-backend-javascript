/**
 * Retrieves a list of students.
 * @author Hanan Hussein
 * @returns {{id: Number, firstName: String, location: String}[]}
 */
export function getListStudents() {
    return [
        { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
        { id: 2, firstName: 'James', location: 'Columbia' },
        { id: 5, firstName: 'Serena', location: 'San Francisco' }
    ];
}
