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
   if (students instanceof Array) {
      return students.reduce(
         (accumulator, currentValue) => accumulator.id || accumulator + currentValue.id, 
         0,
      );
   }
   return 0;
}
