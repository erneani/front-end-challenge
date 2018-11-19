import React from 'react';
import Image from '../header-logo/HeaderLogo';
import { Table } from '../table/Table';

import './style.scss';

export const ColumnRight = () => {
  return(
    <div className="column-right-top">
      <Image source="Layer_22.png" />
      <Table tableTitle="Informações Gerais"/>
    </div>
  )
}