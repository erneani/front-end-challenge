import React from 'react';
import Social from '../social/Social';
import WarningLabel from '../warning-label/WarningLabel';

import './style.scss';

export default class PanelFooter extends React.Component {
  render() {
    return(
      <div className="panel-footer">
        <Social label="Gostou? Então compartilhe."/>
        <WarningLabel 
          warning="*Imagens meramente ilustrativas. 
                  Alguns itens apresentados poderão 
                  não estar disponíveis nas versões. 
                  Preços sugeridos e válidos até 31/07/2015. 
                  Os preços poderão ser modificadas 
                  sem aviso prévio. Consulte e confirme 
                  todas as informações com um de nossos 
                  vendedores." 
        />
      </div>
    )
  }
}