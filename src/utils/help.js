/* eslint react/jsx-filename-extension: 0, react/prefer-stateless-function: 0
  arrow-body-style: 0, react/prop-types: 0, import/prefer-default-export: 0
*/
export function FilterArray (fullArray, windowWidth) {
  if (fullArray) {
    if (windowWidth === '375px') {
      return fullArray.filter(el => el.id < 3);
    }
    return fullArray.filter(el => el.id < 5);
  }
  return [];
}
// Based on the explanation of MDN
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
export function SortArray (a, b) {
  const letterA = a.question[0].toUpperCase();
  const letterB = b.question[0].toUpperCase();
  if (letterA < letterB) {
    return -1;
  }
  if (letterA > letterB) {
    return 1;
  }
  // letter must be equal
  return 0;
}


export class Tip {
  constructor(target, text){
    this.target = target;
    this.text = text;
  }

  ToolTip () {
    const { target } = this;
    if (target) {
      target.addEventListener('mouseover', event => {
        let el = document.createElement('div');
        let rect = target.getBoundingClientRect();
        el.setAttribute('id', 'popover');
        el.innerHTML = this.text;
        el.style.position = 'absolute';
        el.style.top = `${rect.y}px`;
        el.style.left = `${(rect.right/2)+90}px`;
        event.target.appendChild(el);
      });
      target.addEventListener('mouseout', event => {
        let el = document.querySelector(`#popover`);
        event.target.removeChild(el);
      } )
    }
  }
}
