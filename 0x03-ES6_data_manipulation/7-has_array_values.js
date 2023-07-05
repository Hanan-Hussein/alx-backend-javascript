/**
 * Creates a set from an array.
 * @param {Set} set - The collection of unique items.
 * @param {*} array - The array of items.
 * @author Hanan Hussein <https://github.com/Hanan-Hussein>
 * @returns {Boolean}
 */
export default function hasValuesFromArray(set, array) {
    return array.every((value) => set.has(value));
}