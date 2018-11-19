import React from 'react';
import { VerticalListTitle } from '../vertical-list-title/VerticalListTitle';
import { VerticalListItem } from '../vertical-list-item/VerticalListItem';

import './style.scss';

export const VerticalList = () => {
  return(
    <ul className="vertical-list">
      <VerticalListTitle title="Versões" />
      <VerticalListItem item="A 200" />
      <VerticalListItem item="A 250 Turbo Sport" />
      <VerticalListItem item="A 45 AMG 4Matic" />
    </ul>
  )
}