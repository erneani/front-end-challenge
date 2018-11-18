import React from 'react';
import Logo from '../../components/header-logo/HeaderLogo';
import Info from '../../components/footer-info/FooterInfo';
import FooterSocial from '../../components/footer-social/FooterSocial';

import './style.scss';

export default class Footer extends React.Component {
  render() {
    return(
      <div className="footer">
        <div className="footer-top">
          <Logo source="logo_Logo-Grand-Motors.png" />
          <Info />
          <FooterSocial />
        </div>
        <div className="footer-footer">
          <Logo source="autoforce-logo.png" className="footer-footer-logo"/>
        </div>
      </div>
    )
  }
}