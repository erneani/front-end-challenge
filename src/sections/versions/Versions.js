import React from 'react';
import { ColumnLeft } from '../../components/column-left/ColumnLeft';
import { ColumnRight } from '../../components/column-right/ColumnRight';

import './style.scss';

export const Versions = () => {
  return(
    <div className="versions-base">
      <ColumnLeft />
      <ColumnRight />
    </div>
  )
}