/* eslint react/jsx-filename-extension: 0, react/prefer-stateless-function: 0
  arrow-body-style: 0, react/prop-types: 0, import/prefer-default-export: 0
*/
export function filterArray (fullArray, windowWidth) {
  if (fullArray) {
    if (windowWidth === '375px') {
      return fullArray.filter(el => el.id < 3);
    }
    return fullArray.filter(el => el.id < 5);
  } else {
    return [];
  }
}
