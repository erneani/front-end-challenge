import React from 'react';
import CommomLabel from '../commom-label/CommomLabel';
import FooterInfoList from '../footer-info-list/FooterInfoList';

import './style.scss';

export default class FooterInfo extends React.Component {
  render() {
    return(
      <div className="footer-info">
        <CommomLabel className="footer-text" label="© Copyright 2015 - Cliente - Todos os direitos reservados." />
        <FooterInfoList />
      </div>
    )
  }
}