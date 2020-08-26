/**
 * Replaces accented characters with regular ones, removes other non-alphabetical characters, sets as lowercase
 * @param  {String} string The string
 * @return {String}        The cleaned string
 */
export default function toCleanLowercaseString(string) {
  return string
    .normalize("NFD") // replace accented characters with regular character + punctuation
    .replace(/[\u0300-\u036f ]/g, "") // remove all diacritical characters and spaces
    .toLowerCase();
}