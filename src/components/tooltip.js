/* eslint react/jsx-filename-extension: 0, react/prefer-stateless-function: 0
arrow-body-style: 0 */

import React from 'react';
import { Tip } from '../utils/help';

const Tooltip = (props) => {
  const { target, children } = props;
  const element =  document.querySelector(`#${target}`);
  const tip = new Tip(element, children);
  tip.ToolTip();

  return (
    <div>  </div>
  );
};

export default Tooltip;
