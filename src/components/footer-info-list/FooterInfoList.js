import React from 'react';
import TinyLink from '../tiny-link/TinyLink';

import './style.scss';

export default class FooterInfoList extends React.Component {
  render() {
    return(
      <ul className="footer-info-list">
        <TinyLink className="footer-text footer-info-list-element" label="Visitar site" />
        <TinyLink className="footer-text footer-info-list-element" label="Contato" />
        <TinyLink className="footer-text footer-info-list-element" label="Política de privacidade" />
      </ul>
    )
  }
}