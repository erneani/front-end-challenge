import React from 'react';

import './style.scss';

export const TableRow = (props) => {
  return(
    <tr className="table-row">
      <th className="table-header">{props.header}</th>
      <td className="table-element">{props.element}</td>
    </tr>
  )
}