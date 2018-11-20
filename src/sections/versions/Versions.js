import React from 'react';
import { ColumnLeft } from '../../components/column-left/ColumnLeft';
import { ColumnRight } from '../../components/column-right/ColumnRight';
import { SerialItems } from '../../components/serial-items/SerialItems';

import './style.scss';

export const Versions = () => {
  return(
    <div className="versions-base">
      <div className="versions-base-top">
        <ColumnLeft />
        <ColumnRight />
      </div>
      <div className="versions-base-footer">
        <SerialItems />
      </div>
    </div>
  )
}