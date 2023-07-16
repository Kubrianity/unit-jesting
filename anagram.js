/* CHALLENGE 4: ANAGRAM
Return true if anagram and false if not
ex. 'elbow' === 'below' */

const isAnagram = (str1, str2) => formatStr(str1) === formatStr(str2)
// Helper function
const formatStr = (str) => {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('')
}

module.exports = isAnagram