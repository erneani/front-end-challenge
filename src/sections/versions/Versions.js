import React from 'react';
import { ColumnLeft } from '../../components/column-left/ColumnLeft';
import { ColumnRight } from '../../components/column-right/ColumnRight';
import { SerialItens } from '../../components/serial-itens/SerialItens';

import './style.scss';

export const Versions = () => {
  return(
    <div className="versions-base">
      <div className="versions-base-top">
        <ColumnLeft />
        <ColumnRight />
        <SerialItens />
      </div>
      <div className="versions-base-footer">
        
      </div>
    </div>
  )
}